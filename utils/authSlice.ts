import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LabelType, UserDataType, WalletType } from "./types";

interface authState {
  logged_in: boolean;
  user_data: null | UserDataType;
  token: null | string;
}

const initialState = <authState>{
  logged_in: false,
  user_data: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        user_data: authState["user_data"];
      }>
    ) => {
      state.logged_in = true;
      state.token = action.payload.token;
      state.user_data = action.payload.user_data;
    },
    logout: (state) => {
      state.logged_in = false;
      state.token = null;
    },
    updateLabels: (state, action: PayloadAction<LabelType[]>) => {
      if (state.user_data) state.user_data.labels = action.payload;
    },
    updateWallets: (state, action: PayloadAction<WalletType[]>) => {
      if (state.user_data) state.user_data.wallets = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, updateLabels, updateWallets } = authSlice.actions;

export default authSlice.reducer;
