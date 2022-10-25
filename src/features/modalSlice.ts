import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import type { RootState } from '../../app/store';

// Defaine a type for the slice state
interface ModalState {
  isOpen: boolean;
  view: string;
}

// Define the initial state using that type
const initialState: ModalState = {
  isOpen: false,
  view: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.view = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.view = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
