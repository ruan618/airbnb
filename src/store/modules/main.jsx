import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topTransparent: false
    }
  },
  reducers: {
    changeHeaderConfig: (state, {payload}) => {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfig } = mainSlice.actions

export default mainSlice.reducer