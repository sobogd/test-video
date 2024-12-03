import { memo, useEffect, useState } from "react";
import { VideoPlayerProps } from "./types";
import {
  PlayerBox,
  PlayerBoxCaption,
  PlayerButton,
  PlayerVideo,
} from "./styled";
import { Pause, PlayArrow } from "@mui/icons-material";

export const VideoPlayer = memo((props: VideoPlayerProps) => {
  const {
    video,
    isPlaying,
    onClickAction,
    captions,
    time: initialTime,
  } = props;

  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        onClickAction();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClickAction]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(video.current?.currentTime || 0);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [video]);

  const caption = captions.find(
    (c) => c.start_time <= time && c.end_time >= time,
  )?.word;

  return (
    <PlayerBox>
      <PlayerVideo ref={video} src={video.current?.src} />
      <PlayerButton onClick={onClickAction}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </PlayerButton>
      {!!caption && <PlayerBoxCaption label={caption} />}
    </PlayerBox>
  );
});
