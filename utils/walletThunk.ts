import { RootState } from "./store";
import URLs, { API_BASE } from "./endpoints";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { showSnackbarThunk } from "../components/Snackbar/snackbarThunk";
import {
  hideGlobalLoader,
  showGlobalLoader,
} from "../components/GlobalLoader/loaderSlice";
import {
  setWallets as _set,
  createWallet as _create,
  updateWallet as _update,
  deleteWallet as _delete,
} from "./walletSlice";
import { WalletType } from "./types";
import Router from "next/router";

export const refreshWallets = () => {
  const refreshWalletsThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const state = getState();
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.WALLET.GET, {
      headers: {
        Authorization: "Token " + state.auth.token,
      },
    })
      .then((res) => {
        if(res.status === 401) {
          Router.push("/login");
          dispatch(showSnackbarThunk("Please login before accessing this page"));
        }
        else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        if (res.success) {
          dispatch(_set(res.wallets));
        } else {
          dispatch(showSnackbarThunk(res.message));
        }
      });
  };
  return refreshWalletsThunkAction;
};

export const createWallet = (
  data: {
    name: string;
    description?: string;
  },
  onSuccessCallback?: () => any
) => {
  const createWalletThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const state = getState();
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.WALLET.CREATE, {
      method: "POST",
      headers: {
        Authorization: "Token " + state.auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if(res.status === 401) {
          Router.push("/login");
          dispatch(showSnackbarThunk("Please login before accessing this page"));
        }
        else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        if (res.success) {
          dispatch(showSnackbarThunk("New wallet created!"));
          dispatch(_create(res.wallet));
          if (onSuccessCallback) onSuccessCallback();
        } else {
          dispatch(showSnackbarThunk(res.message));
        }
      });
  };
  return createWalletThunkAction;
};

export const updateWallet = (
  walletId: number,
  updateData: {
    name?: string;
    description?: string;
  },
  onSuccessCallback?: (newWallet: WalletType) => any
) => {
  const updateWalletThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const state = getState();
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.WALLET.UPDATE, {
      method: "POST",
      headers: {
        Authorization: "Token " + state.auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wallet: walletId, new_data: updateData }),
    })
      .then((res) => {
        if(res.status === 401) {
          Router.push("/login");
          dispatch(showSnackbarThunk("Please login before accessing this page"));
        }
        else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        if (res.success) {
          dispatch(showSnackbarThunk("Wallet updated!"));
          dispatch(_update({ id: res.wallet.id, newData: res.wallet }));
          if(onSuccessCallback) onSuccessCallback(res.wallet);
        } else {
          dispatch(showSnackbarThunk(res.message));
        }
      });
  };
  return updateWalletThunkAction;
};
