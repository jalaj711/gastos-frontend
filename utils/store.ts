import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import snackbarReducer from "../components/Snackbar/snackbarSlice";
import gloablLoaderReducer from "../components/GlobalLoader/loaderSlice";
import localforage from "localforage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import labelReducer from "./labelSlice";
import walletReducer from "./walletSlice";

const persistConfig = {
  key: "root",
  storage: localforage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    labels: labelReducer,
    wallets: walletReducer,
    snackbar: snackbarReducer,
    globalLoader: gloablLoaderReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
