import { PayloadAction, createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { IBasketDevice, IBasketDevices, IProductItem } from '../../components/products.interface';
import { $authHost } from '../../http';
import { deleteDeviceFromBasket } from '../../http/deviceAPI';

export const fetchOneBasket = createAsyncThunk('cart/fetchOneBasket', async () => {
  const { data } = await $authHost.get('api/basket/one');
  return data;
});

// export const deleteDeviceFromBaskett = createAsyncThunk(
//   'cart/deleteDeviceFromBaskett',
//   async (id: number, { dispatch }) => {
//     deleteDeviceFromBasket(id);
//     dispatch(fetchOneBasket());
//   },
// );

// export const setCount = createAction<number>('cart/setCount');
export interface cartSlice {
  totalPrice: number;
  count: number;
  cart: {
    items: IBasketDevice[];
    status: string;
    error: string;
  };
}

const initialState: cartSlice = {
  totalPrice: 0,
  count: 0,
  cart: {
    items: [],
    status: 'loading',
    error: '',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setDeleteDevice(state, action) {
      deleteDeviceFromBasket(action.payload.id);
      state.cart.items = state.cart.items.filter((item) => item.id !== action.payload.id);
      state.count -= 1;
      state.totalPrice = state.totalPrice - action.payload.device.price;
    },
    // setOneBasket(state, action: PayloadAction<IProductItem>) {
    //   state.items.push(action.payload);
    // },
    // addItemToCart(state, action) {
    //   state.cart.items.push(action.payload);
    // },
  },
  extraReducers: {
    [fetchOneBasket.pending.toString()]: (state) => {
      state.cart.status = 'loading';
    },
    [fetchOneBasket.fulfilled.toString()]: (state, action) => {
      state.cart.status = 'success';
      state.cart.items = action.payload.basket_devices;
      state.count = action.payload.basket_devices.length;
      state.totalPrice = action.payload.basket_devices.reduce((sum: any, item: any) => {
        return sum + item.device.price;
      }, 0);
      // state.count+=1;
    },
    [fetchOneBasket.rejected.toString()]: (state) => {
      state.cart.status = 'error';
      state.cart.items = [];
    },
    // [deleteDeviceFromBaskett.pending.toString()]: (state) => {
    //   state.cart.status = 'loading';
    // },
    // [deleteDeviceFromBaskett.fulfilled.toString()]: (state) => {
    //   state.cart.status = 'success';
    // },
    // [deleteDeviceFromBaskett.rejected.toString()]: (state, action) => {
    //   state.cart.status = 'error';
    //   state.cart.error = action.payload.message;
    // },
  },
});

// export const { totalPriceSum } = cartSlice.actions;
export const { setDeleteDevice } = cartSlice.actions;
export default cartSlice.reducer; // Редюсер, отвечает за изменение состояния
