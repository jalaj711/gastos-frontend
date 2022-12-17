import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WalletType } from "./types";

interface WalletState {
  wallets: WalletType[];
}

const initialState = <WalletState>{
  wallets: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallets: (state, action: PayloadAction<WalletType[]>) => {
      state.wallets = action.payload;
    },
    createWallet: (state, action: PayloadAction<WalletType>) => {
      state.wallets = state.wallets.concat(action.payload);
    },
    updateWallet: (
      state,
      action: PayloadAction<{ id: number; newData: WalletType }>
    ) => {
      for (var i = 0; i < state.wallets.length; i++) {
        if (state.wallets[i].id === action.payload.id) {
          state.wallets[i] = action.payload.newData;
          break;
        }
      }
    },
    deleteWallet: (
      state,
      action: PayloadAction<number>
    ) => {
      var index = 0;
      while(index < state.wallets.length && state.wallets[index].id != action.payload) {
        index++;
      }
      if(index != state.wallets.length) {
        state.wallets = state.wallets.slice(0, index).concat(state.wallets.slice(index+1));
      }
      index = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWallets, createWallet, updateWallet, deleteWallet } = walletSlice.actions;

export default walletSlice.reducer;
