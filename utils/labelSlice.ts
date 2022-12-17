import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LabelType } from "./types";

interface LabelState {
  labels: LabelType[];
}

const initialState = <LabelState>{
  labels: [],
};

export const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    setLabels: (state, action: PayloadAction<LabelType[]>) => {
      state.labels = action.payload;
    },
    createLabel: (state, action: PayloadAction<LabelType>) => {
      state.labels = state.labels.concat(action.payload);
    },
    updateLabel: (
      state,
      action: PayloadAction<{ id: number; newData: LabelType }>
    ) => {
      for (var i = 0; i < state.labels.length; i++) {
        if (state.labels[i].id === action.payload.id) {
          state.labels[i] = action.payload.newData;
          break;
        }
      }
    },
    deleteLabel: (
      state,
      action: PayloadAction<number>
    ) => {
      var index = 0;
      console.log("called", index);
      while(index < state.labels.length && state.labels[index].id != action.payload) {
        index++;
        console.log(index, state.labels[index], state.labels[index+1]);
      }
      if(index != -1) {
        state.labels = state.labels.slice(0, index).concat(state.labels.slice(index+1));
      }
      index = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLabels, createLabel, updateLabel, deleteLabel } = labelSlice.actions;

export default labelSlice.reducer;
