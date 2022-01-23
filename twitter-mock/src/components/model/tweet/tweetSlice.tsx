import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tweet } from "../../app/types/tweet";
import { AppState } from "../../app/store";

type InitialState = {
  tweets: Tweet[]
}

const initialState: InitialState = {
  tweets: [
    {
      user: {
        userId: 'peke',
        name: 'Itsuki',
        iconImage: '',
      },
      contents: 'いい家に引っ越したい',
      images: [],
      createdDate: new Date(`2022/01/20 21:00:00`),
    },
  ],
}

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    addTweet: (state, action: PayloadAction<Tweet>) => {
      // TweetをAPIで登録する
      state.tweets = [action.payload, ...state.tweets];
    },
  }
})

export const { addTweet } = tweetSlice.actions;
export const tweets = (state: AppState) => state.tweet.tweets;
export default tweetSlice.reducer;
