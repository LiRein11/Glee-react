import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterSlice {
  activeIndex: number;
  activeDesignIndex: number;
  filterCategory: number;
  filterDesignCategory: number;
  filterCategories: string[];
  filterDesignCategories: string[];
}

const initialState: FilterSlice = {
  activeIndex: 0,
  activeDesignIndex: 0,
  filterCategory: 0,
  filterDesignCategory: 0,
  filterCategories: ['All', 'Furnitures', 'Lighting', 'Chairs', 'Decor'],
  filterDesignCategories: ['All', 'Furnitures', 'Lighting', 'Chairs', 'Decor'],
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
  },
});

export const { setActiveIndex, setFilterCategory, setActiveDesignIndex, setFilterDesignCategory } =
  filterSlice.actions;
export default filterSlice.reducer; // Редюсер, отвечает за изменение состояния
