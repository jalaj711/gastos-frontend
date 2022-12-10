import { RootState } from "./store";
import URLs, { API_BASE } from "./endpoints";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { login } from "./authSlice";

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

    if (response.status == 200) {
      const json = await response.json();
      dispatch(login(json));
    }
  };
  return loginThunkAction;
};
