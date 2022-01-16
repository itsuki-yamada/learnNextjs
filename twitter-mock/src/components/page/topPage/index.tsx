import { InputTweet } from "../../model/tweet/inputTweet/InputTweet";
import { VFC } from "react";
import { TopPageLayout } from "./index.layout";

export const TopPage: VFC = () => {
  return (
    <TopPageLayout>
      <InputTweet/>
    </TopPageLayout>
  )
}
