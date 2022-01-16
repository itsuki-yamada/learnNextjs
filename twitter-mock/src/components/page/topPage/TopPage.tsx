import { InputTweet } from "../../model/tweet/inputTweet/InputTweet";
import { VFC } from "react";
import { MainLayout } from "../../ui/layout/MainLayout";

const pageName = 'HOME';

export const TopPage: VFC = () => {
  return (
    <MainLayout pageName={pageName}>
      <InputTweet/>
    </MainLayout>
  )
}
