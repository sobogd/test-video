import { MutableRefObject } from "react";
import { Caption } from "../../hooks/types";

export type VideoPlayerProps = {
  video: MutableRefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  onClickAction: () => void;
  captions: Caption[];
  time: number;
};
