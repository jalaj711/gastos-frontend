import { RootState } from "./store";
import URLs, { API_BASE } from "./endpoints";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { login } from "./authSlice";
import { showSnackbarThunk } from "../components/Snackbar/snackbarThunk";
import { hideGloablLoader, showGloablLoader } from "../components/GlobalLoader/loaderSlice";

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
      dispatch(showGloablLoader("verifying your credentials..."))
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

      dispatch(hideGloablLoader())
      if (response.status == 200) {
        const json = await response.json();
        dispatch(login(json));
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
