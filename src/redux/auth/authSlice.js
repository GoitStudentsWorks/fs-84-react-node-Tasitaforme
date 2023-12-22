import { createSlice } from '@reduxjs/toolkit';

import {
  registration,
  logIn,
  logOut,
  currentUser,
  refresh,
  updateUser,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    age: null,
    gender: null,
    height: null,
    weight: null,
    goal: 0,
    baseWater: '',
    activityRatio: '',
    fat: '',
    protein: '',
    carbohydrate: '',
    BMR: '',
    avatarURL: '',
  },
  isLogin: false,
  accessToken: '',
  refreshToken: '',
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
};
const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.message;
};

const handleUpdateUserFulfilled = (state, action) => {
  state.user = { ...state.user, ...action.meta.arg };
  state.isLogin = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, handleFulfilled)
      .addCase(registration.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.isLogin = true;
        state.refreshToken = payload.refreshToken;
        state.accessToken = payload.accessToken;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        handleFulfilled(state);
        state.user = {};
        state.accessToken = '';
        state.refreshToken = '';
        state.isLogin = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
      })
      .addCase(refresh.rejected, handleRejected)
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.user = payload.data;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(updateUser.fulfilled, handleUpdateUserFulfilled);
  },
});

export const authReducer = authSlice.reducer;
