import { memo, useEffect, useState } from "react";
import {
  CaptionsAreaBox,
  CaptionsAreaButton,
  CaptionsAreaStack,
} from "./styled";
import { CaptionsAreaProps } from "./types";
import { Typography } from "@mui/material";

export const CaptionsArea = memo((props: CaptionsAreaProps) => {
  const { captions, video, time: initialTime } = props;

  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(video.current?.currentTime || 0);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [video]);

  const handleClickButton = (start: number) => () => {
    if (video.current) {
      video.current.currentTime = start;
      setTime(start);
    }
  };

  return (
    <CaptionsAreaBox>
      <Typography variant="h5" color="white" padding="10px">
        Captions
      </Typography>
      <CaptionsAreaStack direction="row" gap="10px" flexWrap="wrap">
        {captions.map((caption, index) => {
          const active = caption.start_time <= time && caption.end_time >= time;

          return (
            <CaptionsAreaButton
              key={index}
              color="primary"
              variant={active ? "contained" : "outlined"}
              size="small"
              onClick={handleClickButton(caption.start_time + 0.01)}
            >
              {caption.word} (
              {Number(caption.end_time - caption.start_time).toFixed(2)}s)
            </CaptionsAreaButton>
          );
        })}
      </CaptionsAreaStack>
    </CaptionsAreaBox>
  );
});
