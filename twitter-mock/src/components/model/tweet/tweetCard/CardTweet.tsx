import React from 'react';
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Tweet } from "../../../../types/tweet";
import FaceIcon from '@mui/icons-material/Face';
import styles from './tweetCard.module.css';


type Props = {
  tweet: Tweet
}
const ShowTweet = ({ tweet }: Props) => {
  return (
    <Card className={styles.tweetCard}>
      <CardHeader
        avatar={<FaceIcon/>}
        title={tweet.user.name}
        subheader={tweet.createdDate.toLocaleString()}
      />
      {/*<CardMedia></CardMedia>*/}
      <CardContent>
        {tweet.contents.split(/\n/).map((_tweet, key) => (
          <Typography key={key}>{_tweet}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ShowTweet;