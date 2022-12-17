import { RootState } from "./store";
import URLs, { API_BASE } from "./endpoints";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { login as _login, logout as _logout } from "./authSlice";
import { showSnackbarThunk } from "../components/Snackbar/snackbarThunk";
import {
  hideGlobalLoader,
  showGlobalLoader,
} from "../components/GlobalLoader/loaderSlice";
import Router from "next/router";
import { setWallets } from "./walletSlice";
import { setLabels } from "./labelSlice";
import { refreshLabels } from "./labelThunk";
import { refreshWallets } from "./walletThunk";

export const loginWithUsernameAndPassword = (
  username: string,
  password: string
) => {
  const loginThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    const authenticate = async () => {
      dispatch(showGlobalLoader("verifying your credentials..."));
      const response = await fetch(API_BASE + URLs.AUTH.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      dispatch(hideGlobalLoader());
      if (response.status == 200) {
        const json = await response.json();
        dispatch(_login(json));
        // Loads labels and wallets of the user
        dispatch(refreshLabels());
        dispatch(refreshWallets());
        Router.push("/dashboard");
      } else if (response.status == 403) {
        dispatch(showSnackbarThunk("Wrong credentials"));
      } else {
        dispatch(
          showSnackbarThunk(
            "Unknown error while logging in",
            "retry",
            undefined,
            authenticate
          )
        );
      }
    };
    await authenticate();
  };
  return loginThunkAction;
};

export const logout = () => {
  const logoutThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const deleteToken = async () => {
      dispatch(showGlobalLoader("logging out..."));
      const response = await fetch(API_BASE + URLs.AUTH.LOGOUT, {
        method: "POST",
        headers: {
          Authorization: "Token " + getState().auth.token,
        },
        body: "",
      });

      dispatch(hideGlobalLoader());
      if (response.status == 204) {
        dispatch(setWallets([]));
        dispatch(setLabels([]));
        dispatch(_logout());
        Router.push("/login");
        dispatch(showSnackbarThunk("User logged out"));
      } else {
        dispatch(
          showSnackbarThunk(
            "Unknown error while logging out",
            "retry",
            undefined,
            deleteToken
          )
        );
      }
    };
    await deleteToken();
  };
  return logoutThunkAction;
};
