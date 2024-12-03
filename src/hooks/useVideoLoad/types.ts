import { MutableRefObject } from "react";

export type VideoLoadResult = {
  loadVideo: () => void;
  frames: string[];
  video: MutableRefObject<HTMLVideoElement | null>;
  isLoading: boolean;
  isLoaded: boolean;
  duration: number;
};
