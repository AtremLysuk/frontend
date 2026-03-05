import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const formatGuaranteeDates = (guarantee) => {
  if (!guarantee) return null;
  const startDate = new Date(guarantee.start);
  const endDate = new Date(guarantee.end);
  const format = (date) => ({
    full: date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
    short: date.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .split('.').reverse().join(' / '),
  });
  return { start: format(startDate), end: format(endDate) };
};

const formatPrices = (prices = []) => {
  const usd = prices.find(p => p.symbol === 'USD');
  const uah = prices.find(p => p.symbol === 'UAH');
  return {
    usd: usd ? { value: usd.value, formatted: `${usd.value.toLocaleString('ru-RU')} $`, isDefault: usd.isDefault === 1 } : null,
    uah: uah ? { value: uah.value, formatted: `${uah.value.toLocaleString('ru-RU')} UAH`, isDefault: uah.isDefault === 1 } : null,
  };
};

const enrichProduct = (product, ordersMap) => {
  const order = product.orderId != null ? (ordersMap[product.orderId] ?? null) : null;
  return {
    ...product,
    guaranteeDates: formatGuaranteeDates(product.guarantee),
    prices: formatPrices(product.price),
    orderTitle: order?.title ?? null,
    orderDateRaw: order?.date ?? null,
  };
};

const applyFilter = (products, selectedType) =>
  selectedType ? products.filter(p => p.type === selectedType) : products;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const [productsRes, ordersRes] = await Promise.all([
        axios.get(`${API_URL}/products`),
        axios.get(`${API_URL}/orders`),
      ]);
      return { products: productsRes.data, orders: ordersRes.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
    }
  }
);

export const fetchProductTypes = createAsyncThunk(
  'products/fetchProductTypes',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_URL}/products/types`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка удаления');
    }
  }
);

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productTypes: [],
  selectedType: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
      state.filteredProducts = applyFilter(state.allProducts, action.payload);
    },
    clearFilter: (state) => {
      state.selectedType = null;
      state.filteredProducts = state.allProducts;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const { products, orders } = action.payload;
        const ordersMap = Object.fromEntries(orders.map(o => [o.id, o]));
        state.allProducts = products.map(p => enrichProduct(p, ordersMap));
        state.filteredProducts = applyFilter(state.allProducts, state.selectedType);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchProductTypes.fulfilled, (state, action) => {
        state.productTypes = action.payload;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        state.allProducts = state.allProducts.filter(p => p.id !== id);
        state.filteredProducts = state.filteredProducts.filter(p => p.id !== id);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedType, clearFilter, clearError } = productsSlice.actions;
export default productsSlice.reducer;