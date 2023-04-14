import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { $host } from '../../http';

export const fetchTypesThunk: any = createAsyncThunk('cart/fetchTypesThunk', async () => {
  const { data, status } = await $host.get('api/type');
  if (status !== 200) throw new Error('Server error!');
  return data;
}); // ts ????????

export const fetchBrandsThunk: any = createAsyncThunk('cart/fetchBrandsThunk', async () => {
  const { data, status } = await $host.get('api/brand');
  if (status !== 200) throw new Error('Server error!');
  return data;
}); // ts ????????

export interface FilterSlice {
  status: string | null;
  error: any;
  activeIndex: number;
  activeDesignIndex: number;
  filterCategory: number;
  filterDesignCategory: number;
  filterCategories: any;
  filterDesignCategories: any;
  filterBrands: any;
  activeIndexTypes: number | null;
  activeIndexBrands: number | null;
}

const initialState: FilterSlice = {
  status: null,
  error: null,
  activeIndex: 0,
  activeDesignIndex: 0,
  filterCategory: 0,
  filterDesignCategory: 0,
  filterCategories: [],
  filterDesignCategories: [],
  filterBrands: [],
  activeIndexTypes: null,
  activeIndexBrands: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
    setFilterCategory(state, action: PayloadAction<number>) {
      state.filterCategory = action.payload;
    },
    setActiveDesignIndex: (state, action: PayloadAction<number>) => {
      state.activeDesignIndex = action.payload;
    },
    setFilterDesignCategory(state, action: PayloadAction<number>) {
      state.filterDesignCategory = action.payload;
    },
    toggleActiveIndexArrTypes(state, action: PayloadAction<number|null>) {
      state.activeIndexTypes = action.payload;
      // state.activeIndexArrTypes.includes(action.payload)
      // ? (state.activeIndexArrTypes = state.activeIndexArrTypes.filter(
      //       (el) => el !== action.payload,
      //     ))
      //   : state.activeIndexArrTypes.push(action.payload);
    },
    toggleActiveIndexArrBrands(state, action: PayloadAction<number|null>) {
      state.activeIndexBrands = action.payload;

      // state.activeIndexBrands.includes(action.payload)
      //   ? (state.activeIndexBrands = state.activeIndexBrands.filter(
      //       (el) => el !== action.payload,
      //     ))
      //   : state.activeIndexBrands.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTypesThunk.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTypesThunk.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.filterCategories = action.payload;
      state.filterDesignCategories = action.payload;
    },
    [fetchTypesThunk.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [fetchBrandsThunk.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBrandsThunk.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.filterBrands = action.payload;
    },
    [fetchBrandsThunk.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const {
  setActiveIndex,
  setFilterCategory,
  setActiveDesignIndex,
  setFilterDesignCategory,
  toggleActiveIndexArrTypes,
  toggleActiveIndexArrBrands,
} = filterSlice.actions;
export default filterSlice.reducer; // Редюсер, отвечает за изменение состояния
