import React, { memo, useCallback, useEffect, useState } from "react";
import {
  ControlAreaBox,
  ControlAreaFrame,
  ControlAreaFrames,
  ControlAreaSlider,
  ControlAreaTime,
} from "./styled";
import { ControlAreaProps } from "./types";

export const ControlArea = memo((props: ControlAreaProps) => {
  const {
    time,
    video,
    onChangeStartTime,
    onChangeEndTime,
    onChangeTime,
    startTime,
    endTime,
    duration,
    frames,
  } = props;

  const [controlTime, setControlTime] = useState<number>(time);

  const handleChangeRange = useCallback(
    (_: Event, value: number | number[]) => {
      if (typeof value !== "number" && value.length === 2) {
        if (startTime !== value[0]) onChangeStartTime(value[0]);
        if (endTime !== value[1]) onChangeEndTime(value[1]);
      }
    },
    [endTime, onChangeEndTime, onChangeStartTime, startTime],
  );

  const handleChangeTime = useCallback(
    (_: Event, value: number | number[]) => {
      if (typeof value === "number") {
        onChangeTime(value);
      }
    },
    [onChangeTime],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      video.current?.currentTime && setControlTime(video.current.currentTime);
    }, 1000 / 10);

    return () => {
      clearInterval(interval);
    };
  }, [video]);

  useEffect(() => {
    setControlTime(time);
  }, [time]);

  return (
    <ControlAreaBox>
      <ControlAreaSlider
        value={[startTime, endTime]}
        onChange={handleChangeRange}
        valueLabelDisplay="off"
        disableSwap
        min={0}
        max={duration}
      />
      <ControlAreaTime
        value={controlTime}
        track={false}
        onChange={handleChangeTime}
        valueLabelDisplay="off"
        min={0}
        max={duration}
      />
      <ControlAreaFrames direction="row">
        {frames?.map((frame, index) => (
          <ControlAreaFrame key={index} src={frame} />
        ))}
      </ControlAreaFrames>
    </ControlAreaBox>
  );
});
