import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Authors } from 'src/components/comon-types';

export interface ProfileState {
  name: string;
  visible: boolean;
  isAuth: boolean;
}
const initialState: ProfileState = {
  name: Authors.USER,
  visible: true,
  isAuth: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    auth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { toggleProfile, changeName, auth } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
