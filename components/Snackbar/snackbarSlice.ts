import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MouseEventHandler } from "react";
interface snackbarState {
  show: boolean;
  text: string;
  actionButtonText?:  string;
  onCloseCallback?: (() => any);
  actionButtonCallback?: MouseEventHandler;
  autoCloseTimeoutId?: NodeJS.Timeout;
}

const initialState: snackbarState = {
  show: false,
  text: "",
  actionButtonText: undefined,
  onCloseCallback: undefined,
  actionButtonCallback: undefined,
  autoCloseTimeoutId: undefined,
};

export const snackbarState = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    show: (
      state,
      action: PayloadAction<{
        text: string;
        actionButtonText?: string;
        onCloseCallback?: (() => any);
        actionButtonCallback?: MouseEventHandler;
        autoCloseTimeoutId?: NodeJS.Timeout;
      }>
    ) => {
      state.show = true;
      state.text = action.payload.text;
      state.actionButtonText = action.payload.actionButtonText;
      state.actionButtonCallback = action.payload.actionButtonCallback;
      state.onCloseCallback = action.payload.onCloseCallback;
      state.autoCloseTimeoutId = action.payload.autoCloseTimeoutId;
    },
    hide: (state) => {
      if (state.onCloseCallback) {
        state.onCloseCallback()
      }
      clearTimeout(state.autoCloseTimeoutId);
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const showSnackbar = snackbarState.actions.show;
export const hideSnackbar = snackbarState.actions.hide;

export default snackbarState.reducer;
