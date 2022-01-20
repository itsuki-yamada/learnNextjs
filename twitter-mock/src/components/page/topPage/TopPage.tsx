import { InputTweet } from "../../model/tweet/inputTweet/InputTweet";
import { VFC } from "react";
import { MainLayout } from "../../ui/layout/MainLayout";
import { Timeline } from "../../model/tweet/timeline/Timeline";

const pageName = 'HOME';

export const TopPage: VFC = () => {
  return (
    <MainLayout pageName={pageName}>
      <InputTweet/>
      <Timeline/>
    </MainLayout>
  )
}
