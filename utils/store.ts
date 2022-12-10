import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import snackbarReducer from "../components/Snackbar/snackbarSlice";
import gloablLoaderReducer from "../components/GlobalLoader/loaderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer,
    globalLoader: gloablLoaderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
