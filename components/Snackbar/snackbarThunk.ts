import { RootState } from "../../utils/store";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { showSnackbar, hideSnackbar } from "./snackbarSlice";

export const showSnackbarThunk = (
  text: string,
  actionButtonText?: string,
  onCloseCallback?: (_: any) => any,
  autoCloseTimeout?: number
) => {
  autoCloseTimeout = autoCloseTimeout || 3000;
  const showSnackbarAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (dispatch, getState) => {
    const c_state = getState().snackbar;
    const dispatchSnackbarShow = () => {
      const autoCloseTimeoutId = setTimeout(() => {
        dispatch(hideSnackbar());
      }, autoCloseTimeout);
      dispatch(
        showSnackbar({
          text,
          actionButtonText,
          onCloseCallback,
          autoCloseTimeoutId,
        })
      );
    };
    if (c_state.show == true) {
      // First close the previous snackbar then show new one
      dispatch(hideSnackbar());
      setTimeout(dispatchSnackbarShow, 200);
    } else {
      dispatchSnackbarShow();
    }
  };
  return showSnackbarAction;
};
