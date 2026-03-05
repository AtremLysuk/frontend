import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://host.docker.internal:3001/api';

const calculateOrderTotals = (order, products = []) => {
  const totals = products.reduce((acc, product) => {
    const usdPrice = product.price?.find(p => p.symbol === 'USD')?.value || 0;
    const uahPrice = product.price?.find(p => p.symbol === 'UAH')?.value || 0;
    return {
      usd: acc.usd + usdPrice,
      uah: acc.uah + uahPrice
    };
  }, { usd: 0, uah: 0 });

  return {
    ...order,
    productsCount: products.length,
    products,
    totalUSD: totals.usd,
    totalUAH: totals.uah
  };
};

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const [ordersRes, productsRes] = await Promise.all([
        axios.get(`${API_URL}/orders`),
        axios.get(`${API_URL}/products`),
      ]);
      return { orders: ordersRes.data, products: productsRes.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
    }
  }
);

export const fetchOrderById = createAsyncThunk(
  'orders/fetchOrderById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_URL}/orders/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки');
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/orders/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка удаления');
    }
  }
);

const initialState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
  deleteModal: {
    isOpen: false,
    orderId: null,
    orderName: null
  },
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
    openDeleteModal: (state, action) => {
      state.deleteModal.isOpen = true;
      state.deleteModal.orderId = action.payload.id;
      state.deleteModal.orderName = action.payload.name || action.payload.title;
    },
    closeDeleteModal: (state) => {
      state.deleteModal = { isOpen: false, orderId: null, orderName: null };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        const { orders, products } = action.payload;
        state.orders = orders.map(order =>
          calculateOrderTotals(order, products.filter(p => p.orderId === order.id))
        );
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        const order = action.payload;
        state.currentOrder = calculateOrderTotals(order, order.products || []);
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        state.orders = state.orders.filter(o => o.id !== id);
        if (state.currentOrder?.id === id) {
          state.currentOrder = null;
        }
        state.deleteModal = { isOpen: false, orderId: null, orderName: null };
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const {
  clearCurrentOrder,
  openDeleteModal,
  closeDeleteModal,
} = ordersSlice.actions;

export default ordersSlice.reducer;