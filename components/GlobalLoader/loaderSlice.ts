import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface gloablLoaderState {
  show: boolean;
  text: string;
}

const initialState: gloablLoaderState = {
  show: false,
  text: "",
};

export const gloablLoaderState = createSlice({
  name: "globalLoader",
  initialState,
  reducers: {
    show: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.show = true;
      state.text = action.payload || "Loading";
    },
    hide: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const showGloablLoader = gloablLoaderState.actions.show;
export const hideGloablLoader = gloablLoaderState.actions.hide;

export default gloablLoaderState.reducer;
