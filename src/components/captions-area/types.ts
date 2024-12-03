import { Caption } from "../../hooks/types";
import { MutableRefObject } from "react";

export type CaptionsAreaProps = {
  captions: Caption[];
  video: MutableRefObject<HTMLVideoElement | null>;
  time: number;
};
