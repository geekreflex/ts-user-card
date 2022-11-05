import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { UserModel } from '../types/userTypes';

interface UserState {
  users: UserModel[];
  user: UserModel;
  error: string;
  layout: 'grid' | 'list';
}

const userData = {
  firstName: '',
  lastName: '',
  email: '',
  active: true,
  bio: '',
  id: '',
};

const initialState: UserState = {
  users: [],
  user: userData,
  error: '',
  layout: 'list',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsersFromStorage(state) {
      const users = localStorage.getItem('app-users');
      const json = users ? JSON.parse(users) : null;
      if (json) {
        state.users = json;
      }
    },
    addUser: (state, action: PayloadAction<UserModel>) => {
      const currUsers = current(state.users);
      const users = [...currUsers];
      const newUser = action.payload;

      const userExists = users.find((user) => user.email === newUser.email);

      if (userExists) {
        state.error = 'User already exists';
        return;
      }

      users.push(newUser);
      localStorage.setItem('app-users', JSON.stringify(users));
      userSlice.caseReducers.getUsersFromStorage(state);
    },
    deleteUser: (state) => {
      const id = state.user.id;
      const users = state.users;
      const userIndex = users.findIndex((user) => user.id === id);
      users.splice(userIndex, 1);
      state.user = userData;
      localStorage.setItem('app-users', JSON.stringify(users));
      userSlice.caseReducers.getUsersFromStorage(state);
    },
    resetError: (state) => {
      state.error = '';
    },
    getLayout: (state) => {
      let value: any = localStorage.getItem('layout') || 'list';
      state.layout = value;
    },
    setLayout: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.layout = action.payload;
      localStorage.setItem('layout', action.payload);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      let updated = state.users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      );
      localStorage.setItem('app-users', JSON.stringify(updated));
      userSlice.caseReducers.getUsersFromStorage(state);
    },
    setUser: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const users = current(state.users);
      const user = users.find((user) => user.id === id);
      state.user = user || userData;
    },
  },
});

export const {
  getUsersFromStorage,
  addUser,
  getLayout,
  setLayout,
  toggleStatus,
  setUser,
  deleteUser,
} = userSlice.actions;
export default userSlice.reducer;
