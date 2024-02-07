import { getGoodPrice, getHighScore, getLongFor, getPopularDest, getRecommendDest} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const axiosHomeData = createAsyncThunk('axiosGoodPrice', (payload, { dispatch }) => {
  getGoodPrice().then((res) => {
    dispatch(changeGoodPriceAction(res))
  }) 
  getHighScore().then((res) => {
    dispatch(changeHighScoreAction(res))
  })
  getPopularDest().then((res) => {
    dispatch(changePopularDestAction(res))
  })
  getRecommendDest().then((res) => {
    dispatch(changeRecommendDestAction(res))
  })
  getLongFor().then((res) => {
    dispatch(changeLongforAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
    highScore: {},
    popularDest: {},
    recommendDest: {},
    longfor: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScore = payload;
    },
    changePopularDestAction(state, { payload }) {
      state.popularDest = payload;
    },
    changeRecommendDestAction(state, { payload }) {
      state.recommendDest = payload;
    },
    changeLongforAction(state, { payload }) {
      state.longfor = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(axiosGoodPrice.fulfilled, (state, {payload}) => {
  //     state.goodPrice = payload;
  //   })
  // }
})

export const {
  changeGoodPriceAction, 
  changeHighScoreAction, 
  changePopularDestAction,
  changeRecommendDestAction,
  changeLongforAction
} = homeSlice.actions;

export { axiosHomeData }

export default homeSlice.reducer