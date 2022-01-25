import { Tweet } from "../../../../types/tweet";
import { useSelector } from "react-redux";
import { tweets } from "../tweetSlice";
import ShowTweet from "../tweetCard/CardTweet";

// TODO レイアウトをいい感じに整える
export const Timeline = () => {
  const timeline = useSelector(tweets);
  return (
    <>
      {
        timeline.map((tweet: Tweet, index: number) => {
          return (
            <ShowTweet key={index} tweet={tweet}/>
          )
        })
      }
    </>
  )
}