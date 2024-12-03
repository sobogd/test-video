import { memo, useCallback, useState } from "react";
import { EditorScreenProps } from "./types";
import { ControlAreaStack, VideoStack } from "./styled";
import { VideoPlayer } from "../video-player";
import { ControlArea } from "../control-area";
import { CaptionsArea } from "../captions-area";

export const EditorScreen = memo((props: EditorScreenProps) => {
  const {
    time,
    video,
    duration,
    startTime,
    endTime,
    onChangeStartTime,
    onChangeEndTime,
    onChangeTime,
    frames,
    captions,
  } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const handleClickAction = useCallback(async () => {
    setIsPlaying((prev) => {
      if (prev) {
        video.current?.pause();
        return false;
      } else {
        if (video.current && !video.current?.currentTime) {
          video.current.currentTime = startTime;
        }
        video.current?.play();
        return true;
      }
    });
  }, [video, startTime]);

  return (
    <VideoStack direction="row">
      <ControlAreaStack>
        <CaptionsArea captions={captions} video={video} time={time} />
        <ControlArea
          time={time}
          video={video}
          startTime={startTime}
          endTime={endTime}
          onChangeStartTime={onChangeStartTime}
          onChangeEndTime={onChangeEndTime}
          onChangeTime={onChangeTime}
          duration={duration}
          frames={frames}
        />
      </ControlAreaStack>
      <VideoPlayer
        video={video}
        isPlaying={isPlaying}
        onClickAction={handleClickAction}
        captions={captions}
        time={time}
      />
    </VideoStack>
  );
});
