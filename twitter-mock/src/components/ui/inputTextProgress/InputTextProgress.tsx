import React, { VFC } from "react";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";

type props = {
  limit: number,
  currentLength: number,
  size?: number
}

// TODO: cssを別ファイル管理に変更する
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
            variant={'determinate'}
            value={per > 100 ? 100 : per}
            color={isError ? 'error' : 'primary'}
            size='100%'
            style={{
              backgroundColor: 'lemonchiffon',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              height: `100%`,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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