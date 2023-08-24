import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface MainSlice {
  inited: boolean
}

const initialState: MainSlice = {
  inited: false
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setInited: (state) => {
      state.inited = true;

      localStorage.setItem('inited', 'true')
    },
  },
});

export const {
  setInited,
} = mainSlice.actions;
export default mainSlice.reducer; // Редюсер, отвечает за изменение состояния
