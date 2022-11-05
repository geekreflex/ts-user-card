import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import type { RootState } from '../../app/store';

// Defaine a type for the slice state
interface ModalState {
  createModal: boolean;
  deleteModal: boolean;
  editMode: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  createModal: false,
  deleteModal: false,
  editMode: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.createModal = action.payload;
    },
    toggleDeleteModal(state, action: PayloadAction<boolean>) {
      state.deleteModal = action.payload;
    },
    toggleEditMode(state, action: PayloadAction<boolean>) {
      state.editMode = action.payload;
    },
  },
});

export const { toggleCreateModal, toggleDeleteModal, toggleEditMode } =
  modalSlice.actions;
export default modalSlice.reducer;
