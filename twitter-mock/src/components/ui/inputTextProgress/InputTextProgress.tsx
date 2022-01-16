import { VFC } from "react";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";

type props = {
  limit: number,
  currentLength: number
}

// TODO: [] 別ファイル管理に移行する
// TODO: [] プログレスのwidthを調整して文字が中心に来るように変更する
export const InputTextProgress: VFC<props> = ({ limit, currentLength }) => {
  return (
    <>
      <Box sx={{ position: 'relative', display: 'inline-flex', backgroundColor: 'skyblue' }}>
        <CircularProgress variant={'determinate'} value={20} style={{backgroundColor: 'lemonchiffon'}}/>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(10)}`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};