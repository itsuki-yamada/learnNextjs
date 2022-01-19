import React, { VFC } from "react";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";
import styles from './inputTextProgress.module.css';

type props = {
  limit: number,
  currentLength: number,
  size?: number
}

export const InputTextProgress: VFC<props> = React.memo(
  function InputTextProgress({ limit, currentLength, size = 40 }) {
    const per = Math.round(currentLength / limit * 100);
    const isError = per > 100;
    return (
      <>
        <Box sx={{
          position: 'relative',
          display: 'inline-flex',
          backgroundColor: 'skyblue',
          height: `${size}px`,
          width: `${size}px`
        }}>
          <CircularProgress
            className={styles.circularProgress}
            variant={'determinate'}
            value={per > 100 ? 100 : per}
            color={isError ? 'error' : 'primary'}
            size='100%'
          />
          <Box className={styles.box}>
            {isError && (
              <Typography
                variant="caption"
                component="div"
                color="error"
              >
                {`${limit - currentLength}`}
              </Typography>
            )}
          </Box>
        </Box>
      </>
    );
  }, (prev, next) => (
    prev.limit === next.limit &&
    prev.currentLength === next.currentLength
  ));