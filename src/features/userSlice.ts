import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { UserModel } from '../types/userTypes';

interface UserState {
  users: UserModel[];
  user: {};
  error: string;
}

const initialState: UserState = {
  users: [],
  user: {},
  error: '',
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
      console.log(state.users);
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
    deleteUser: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      console.log(userId);
    },
    resetError: (state) => {
      state.error = '';
    },
  },
});

export const { getUsersFromStorage, addUser } = userSlice.actions;
export default userSlice.reducer;
