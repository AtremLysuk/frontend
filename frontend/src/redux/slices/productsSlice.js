import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';


export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
  }
});
export const fetchProductsByType = createAsyncThunk('products/fetchProductsByType', async (type, {rejectWithValue}) => {
  try {
    const response = await axios.get(`${API_URL}/products?type=${encodeURIComponent(type)}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
  }
});
export const fetchProductTypes = createAsyncThunk('products/fetchProductTypes', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get(`${API_URL}/products/types`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
  }
});
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, {
  rejectWithValue,
  dispatch,
  getState
}) => {
  try {
    const state = getState();
    const product = state.products.allProducts.find(p => p.id === id);
    const orderId = product?.order;
    await axios.delete(`${API_URL}/products/${id}`);
    // После удаления продукта, пересчитываем totals заказа
    const productsRes = await axios.get(`${API_URL}/products`);
    dispatch(recalculateOrderTotals({
      orderId, allProducts: productsRes.data
    }));
    return {id, orderId};
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Ошибка удаления');
  }
});

const formatGuaranteeDates = (guarantee) => {
  if (!guarantee) return null;
  const startDate = new Date(guarantee.start);
  const endDate = new Date(guarantee.end);
  return {
    start: {
      full: startDate.toLocaleDateString('ru-RU', {
        year: 'numeric', month: 'long', day: 'numeric'
      }), short: startDate.toLocaleDateString('ru-RU', {
        year: 'numeric', month: '2-digit', day: '2-digit'
      }).split('.').reverse().join(' / ')
    }, end: {
      full: endDate.toLocaleDateString('ru-RU', {
        year: 'numeric', month: 'long', day: 'numeric'
      }), short: endDate.toLocaleDateString('ru-RU', {
        year: 'numeric', month: '2-digit', day: '2-digit'
      }).split('.').reverse().join(' / ')
    }
  };
};
const formatPrices = (prices) => {
  const usd = prices.find(p => p.symbol === 'USD');
  const uah = prices.find(p => p.symbol === 'UAH');
  return {
    usd: usd ? {
      value: usd.value,
      formatted: `${usd.value.toLocaleString('ru-RU')} $`,
      isDefault: usd.isDefault === 1
    } : null, uah: uah ? {
      value: uah.value,
      formatted: `${uah.value.toLocaleString('ru-RU')} UAH`,
      isDefault: uah.isDefault === 1
    } : null
  };
};
const initialState = {
  allProducts: [],
  filteredProducts: [],
  productTypes: [],
  selectedType: null,
  loading: false, error: null,
};
// ---------- Slice ----------
const productsSlice = createSlice({
  name: 'products', initialState, reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
      if (action.payload) {
        state.filteredProducts = state.allProducts.filter(p => p.type === action.payload);
      } else {
        state.filteredProducts = state.allProducts;
      }
    }, clearFilter: (state) => {
      state.selectedType = null;
      state.filteredProducts = state.allProducts;
    }, clearError: (state) => {
      state.error = null;
    },
  }, extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        // Форматируем данные для отображения
        state.allProducts = action.payload.map(product => ({
          ...product,
          guaranteeDates: formatGuaranteeDates(product.guarantee),
          prices: formatPrices(product.price || []),
        }));
        // Применяем текущий фильтр если есть
        if (state.selectedType) {
          state.filteredProducts = state.allProducts.filter(p => p.type === state.selectedType);
        } else {
          state.filteredProducts = state.allProducts;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsByType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByType.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredProducts = action.payload.map(product => ({
          ...product,
          guaranteeDates: formatGuaranteeDates(product.guarantee),
          prices: formatPrices(product.price || []),
        }));
      })
      .addCase(fetchProductsByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductTypes.fulfilled, (state, action) => {
        state.productTypes = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const {id} = action.payload;
        // Удаляем из всех списков
        state.allProducts = state.allProducts.filter(p => p.id !== id);
        state.filteredProducts = state.filteredProducts.filter(p => p.id !== id);
      });
  },
});
export const {setSelectedType, clearFilter, clearError} = productsSlice.actions;
export default productsSlice.reducer;