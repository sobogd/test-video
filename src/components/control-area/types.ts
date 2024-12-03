import { MutableRefObject } from "react";

export type ControlAreaProps = {
  time: number;
  startTime: number;
  endTime: number;
  duration: number;
  frames: string[];
  video: MutableRefObject<HTMLVideoElement | null>;
  onChangeStartTime: (newTime: number) => void;
  onChangeEndTime: (newTime: number) => void;
  onChangeTime: (newTime: number) => void;
};
