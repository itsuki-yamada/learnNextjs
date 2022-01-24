import { Button, FormControl, Grid, TextField } from "@mui/material";
import { ChangeEvent, useState, VFC } from "react";
import { InputTextProgress } from "../../../ui/inputTextProgress/InputTextProgress";
import styles from './inputTweet.module.css';
import { useDispatch } from "react-redux";
import { Tweet } from "../../../app/types/tweet";
import { addTweet } from "../tweetSlice";

const tweetLenLimit = 280;

/**
 * Tweet入力コンポーネント
 *
 * Tweetの入力と登録を行う。Tweetは280文字制限。HTMLエスケープ処理も行う。
 * TODO: Tweet登録時に使用するときに、認証User情報をもたせるように修正
 * TODO: 画像を4枚まで添付できるよう修正
 * TODO: 認証済みユーザーでない場合、Tweetできないように修正
 */
export const InputTweet: VFC = function InputTweet() {
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState<string>('');

  const changeTweetText = (e: ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    setTweet(e.target.value)
  };

  const submitTweet = (e) => {
    e.preventDefault();
    if (tweet.length > tweetLenLimit) return;
    const newTweet: Tweet = {
      user: {
        userId: '123@',
        name: 'itsuki',
        iconImage: '',
      },
      contents: tweet,
      images: [],
      createdDate: new Date(),
    }
    dispatch(addTweet(newTweet));
    setTweet('');
  }

  return (
    <FormControl className={styles.formControl}>
      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item className={styles.tweetInput}>
          <TextField
            className={styles.tweetInput}
            placeholder={'What\'s happening?'}
            multiline
            onChange={changeTweetText}
            value={tweet}
            error={tweet.length > tweetLenLimit}
          />
        </Grid>
        <Grid container item direction={'row'} justifyContent='flex-end'>
          <InputTextProgress limit={tweetLenLimit} currentLength={tweet.length}/>
          <Button
            variant={'outlined'}
            onClick={submitTweet}
            disabled={tweet.length > tweetLenLimit}
          >
            Tweet
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  )
}