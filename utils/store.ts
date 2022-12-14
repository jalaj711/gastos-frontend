import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import snackbarReducer from "../components/Snackbar/snackbarSlice";
import gloablLoaderReducer from "../components/GlobalLoader/loaderSlice";
import localforage from "localforage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localforage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    globalLoader: gloablLoaderReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
