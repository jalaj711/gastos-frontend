import { createSlice } from '@reduxjs/toolkit'
interface authState {
    logged_in: boolean;
    user_data: null | {
        first_name: string;
        last_name: string;
    };
    token: null | string;
}

const initialState = <authState>{
    logged_in: false,
    user_data: null,
    token: null,
  }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logged_in = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.logged_in = false;
      state.token = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer