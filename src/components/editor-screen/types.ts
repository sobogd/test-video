import { MutableRefObject } from "react";
import { Caption } from "../../hooks/types";

export type EditorScreenProps = {
  time: number;
  duration: number;
  startTime: number;
  endTime: number;
  frames: string[];
  video: MutableRefObject<HTMLVideoElement | null>;
  onChangeStartTime: (newTime: number) => void;
  onChangeEndTime: (newTime: number) => void;
  onChangeTime: (newTime: number) => void;
  captions: Caption[];
};
