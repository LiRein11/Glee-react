import { PayloadAction, createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductItem } from '../../components/products.interface';
import { $authHost } from '../../http';

export const fetchOneBasket = createAsyncThunk('cart/fetchOneBasket', async () => {
  const { data } = await $authHost.get('api/basket/one');
  return data;
});
export const setCount = createAction<number>('cart/setCount');
export interface cartSlice {
  totalPrice: number;
  count: number;
  cart: {
    items: IProductItem[];
    status: string;
  };
}

const initialState = {
  totalPrice: 0,
  count: 0,
  cart: {
    items: [],
    status: 'loading',
  },
} as cartSlice;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCount(state, action){
      state.count = action.payload
    }
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
      state.count = action.payload.basket_devices.length 
      // state.count+=1;

    },
    [fetchOneBasket.rejected.toString()]: (state) => {
      state.cart.status = 'error';
      state.cart.items = [];
    },
  },
});

// export const { addItemToCart } = cartSlice.actions;
// export const { setCount } = cartSlice.actions;
export default cartSlice.reducer; // Редюсер, отвечает за изменение состояния
