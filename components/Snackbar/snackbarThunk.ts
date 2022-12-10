import { RootState } from "../../utils/store";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { showSnackbar, hideSnackbar } from "./snackbarSlice";
import { MouseEventHandler } from "react";

export const showSnackbarThunk = (
  text: string,
  actionButtonText?: string,
  onCloseCallback?: () => any,
  actionButtonCallback?: MouseEventHandler,
  autoCloseTimeout?: number
) => {
  // Close in specified time or 3s
  autoCloseTimeout = autoCloseTimeout || 3000;

  const showSnackbarAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (dispatch, getState) => {

    // Function to dispatch snackbar/show action
    const dispatchSnackbarShow = () => {

      // Set auto close timer
      const autoCloseTimeoutId = setTimeout(() => {
        dispatch(hideSnackbar());
      }, autoCloseTimeout);


      dispatch(
        showSnackbar({
          text,
          actionButtonText,
          onCloseCallback,
          autoCloseTimeoutId,
          actionButtonCallback
        })
      );
    };

    // If a snackbar is already visible
    if (getState().snackbar.show == true) {
      // First close the previous snackbar then show new one
      dispatch(hideSnackbar());
      setTimeout(dispatchSnackbarShow, 200);
    } else {
      dispatchSnackbarShow();
    }
  };
  return showSnackbarAction;
};
