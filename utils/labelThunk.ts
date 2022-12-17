import { RootState } from "./store";
import URLs, { API_BASE } from "./endpoints";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { showSnackbarThunk } from "../components/Snackbar/snackbarThunk";
import {
  hideGlobalLoader,
  showGlobalLoader,
} from "../components/GlobalLoader/loaderSlice";
import {
  setLabels as _set,
  createLabel as _create,
  updateLabel as _update,
  deleteLabel as _delete,
} from "./labelSlice";
import { LabelType } from "./types";
import Router from "next/router";

export const refreshLabels = () => {
  const refreshLabelsThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const state = getState();
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.LABELS.GET, {
      headers: {
        Authorization: "Token " + state.auth.token,
      },
    })
      .then((res) => {
        if(res.status === 401) {
          Router.push("/login");
          dispatch(showSnackbarThunk("Please login before accessing this page"));
        }
        else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        if (res.success) {
          dispatch(_set(res.labels));
        } else {
          dispatch(showSnackbarThunk(res.message));
        }
      });
  };
  return refreshLabelsThunkAction;
};

export const createLabel = (
  data: {
    name: string;
    color: string;
    description?: string;
  },
  onSuccessCallback?: () => any
) => {
  const createLabelThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const state = getState();
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.LABELS.CREATE, {
      method: "POST",
      headers: {
        Authorization: "Token " + state.auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if(res.status === 401) {
          Router.push("/login");
          dispatch(showSnackbarThunk("Please login before accessing this page"));
        }
        else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        if (res.success) {
          dispatch(showSnackbarThunk("New label created!"));
          dispatch(_create(res.label));
          if (onSuccessCallback) onSuccessCallback();
        } else {
          dispatch(showSnackbarThunk(res.message));
        }
      });
  };
  return createLabelThunkAction;
};

export const updateLabel = (
  labelId: number,
  updateData: {
    name?: string;
    color?: string;
    description?: string;
  },
  onSuccessCallback?: (newLabel: LabelType) => any
) => {
  const updateLabelThunkAction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState
  ) => {
    const state = getState();
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.LABELS.UPDATE, {
      method: "POST",
      headers: {
        Authorization: "Token " + state.auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ label: labelId, new_data: updateData }),
    })
      .then((res) => {
        if(res.status === 401) {
          Router.push("/login");
          dispatch(showSnackbarThunk("Please login before accessing this page"));
        }
        else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        if (res.success) {
          dispatch(showSnackbarThunk("Label updated!"));
          dispatch(_update({ id: res.label.id, newData: res.label }));
          if (onSuccessCallback) onSuccessCallback(res.label);
        } else {
          dispatch(showSnackbarThunk(res.message));
        }
      });
  };
  return updateLabelThunkAction;
};
