import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface snackbarState {
  show: boolean;
  text: string;
  actionButtonText?:  string;
  onCloseCallback?: ((_: any) => any);
  autoCloseTimeoutId?: NodeJS.Timeout;
}

const initialState: snackbarState = {
  show: false,
  text: "",
  actionButtonText: undefined,
  onCloseCallback: undefined,
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
        onCloseCallback?: ((_: any) => any);
        autoCloseTimeoutId?: NodeJS.Timeout;
      }>
    ) => {
      state.show = true;
      state.text = action.payload.text;
      state.actionButtonText = action.payload.actionButtonText;
      state.onCloseCallback = action.payload.onCloseCallback;
      state.autoCloseTimeoutId = action.payload.autoCloseTimeoutId;
    },
    hide: (state) => {
      clearTimeout(state.autoCloseTimeoutId);
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const showSnackbar = snackbarState.actions.show;
export const hideSnackbar = snackbarState.actions.hide;

export default snackbarState.reducer;
