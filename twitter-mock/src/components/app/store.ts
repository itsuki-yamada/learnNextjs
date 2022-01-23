import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "../model/tweet/tweetSlice";

const store = configureStore({
  reducer: {
    tweet: tweetSlice
  }
})

export type AppState = ReturnType<typeof store.getState>

export default store;