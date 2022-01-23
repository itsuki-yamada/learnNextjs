import { Tweet } from "../../../app/types/tweet";
import { useSelector } from "react-redux";
import { tweets } from "../tweetSlice";

// TODO レイアウトをいい感じに整える
export const Timeline = () => {
  const timeline = useSelector(tweets);
  return (
    <>
      {
        timeline.map((tweet: Tweet, index: number) => {
          return (
            <div key={index}>
              {tweet.createdDate.toLocaleString()}<br/>
              {tweet.user.name} @{tweet.user.userId}<br/>
              {tweet.contents}
            </div>
          )
        })
      }
    </>
  )
}