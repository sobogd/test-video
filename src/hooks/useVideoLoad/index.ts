import { useRef, useState } from "react";
import { VideoLoadResult } from "./types";

const totalFrames = 15;

export const useVideoLoad = (videoUrl: string): VideoLoadResult => {
  const [frames, setFrames] = useState<string[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(0);

  const video = useRef<HTMLVideoElement | null>(null);

  const loadVideo = async () => {
    setIsLoading(true);

    let canvas: HTMLCanvasElement = document.createElement("canvas");
    let context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    let duration: number;

    video.current = document.createElement("video");

    video.current.preload = "auto";
    video.current.crossOrigin = "anonymous";

    video.current?.addEventListener("loadeddata", async function () {
      const frames: string[] = [];

      if (!video.current) return;

      canvas.width = video.current.videoWidth;
      canvas.height = video.current.videoHeight;
      duration = video.current.duration;

      for (let time = 0; time < duration; time += duration / totalFrames) {
        if (context) {
          const frame = await new Promise(
            (resolve: (frame: string) => void) => {
              let eventCallback = () => {
                video.current?.removeEventListener("seeked", eventCallback);
                !!video.current &&
                  context?.drawImage(
                    video.current,
                    0,
                    0,
                    video.current.videoWidth,
                    video.current.videoHeight,
                  );
                resolve(canvas.toDataURL());
              };
              video.current?.addEventListener("seeked", eventCallback);
              !!video.current && (video.current.currentTime = time);
            },
          );
          frames.push(frame);
        }
      }

      setFrames(frames);
      setIsLoaded(true);
      setIsLoading(false);
      setDuration(video.current.duration);
    });

    video.current.src = videoUrl;
    video.current.load();
  };

  return { loadVideo, frames, video, isLoaded, isLoading, duration };
};
