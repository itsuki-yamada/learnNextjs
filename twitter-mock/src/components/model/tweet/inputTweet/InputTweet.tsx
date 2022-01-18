import { AccountCircle } from "@mui/icons-material";
import { Button, FormControl, Input, InputAdornment } from "@mui/material";
import { ChangeEvent, useState, VFC } from "react";
import { InputTextProgress } from "../../../ui/inputTextProgress/InputTextProgress";

const tweetLenLimit = 10;

/**
 * Tweet入力コンポーネント
 *
 * Tweetの入力と登録を行う。Tweetは280文字制限。HTMLエスケープ処理も行う。
 * TODO: [] 制限文字数の入力がある場合エラー表示する
 * TODO: [] Tweetを登録する(hooks)
 * TODO: [] レイアウトをTwitterのように整える
 */
export const InputTweet: VFC = function InputTweet() {
  const [tweetLen, setTweetLen] = useState<number>(0);
  const changeTweetText = (e: ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => setTweetLen(e.target.value.length);
  return (
    <>
      <FormControl style={{ 'backgroundColor': 'pink' }}>
        <Input
          style={{ 'backgroundColor': 'yellowgreen' }}
          placeholder={'What\'s happening?'}
          startAdornment={
            <InputAdornment position="start">
              {/* TODO:AccountCircleは、Model/User配下からのカスタムコンポーネントに差し替える*/}
              <AccountCircle/>
            </InputAdornment>
          }
          onChange={changeTweetText}
          error={tweetLen > tweetLenLimit}
        />
        <InputTextProgress limit={tweetLenLimit} currentLength={tweetLen}/>
        <Button>Tweet</Button>
      </FormControl>
    </>)
}