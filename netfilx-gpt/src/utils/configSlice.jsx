import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "lang",
  initialState: {
    language: "en",
  },
  reducers: {
    chooseLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { chooseLanguage } = configSlice.actions;

export default configSlice.reducer;
