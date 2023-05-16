import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToggleState {
  teamToggle: boolean;
  personalToggle: boolean;
}

const initialState: ToggleState = {
  teamToggle: false,
  personalToggle: false,
};

export const counterSlice = createSlice({
  name: "toggleButton",
  initialState,
  reducers: {
    handleTeamToggle: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.teamToggle = action.payload;
    },
    handlePersonalToggle: (state, action: PayloadAction<boolean>) => {
      state.personalToggle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleTeamToggle, handlePersonalToggle } = counterSlice.actions;

export default counterSlice.reducer;
