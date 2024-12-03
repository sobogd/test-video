export function getFrames(videoUrl: string): Promise<string[]> {
  return new Promise(
    (resolve: (frames: string[]) => void, reject: (error: string) => void) => {
      let frames: string[] = [];
      let canvas: HTMLCanvasElement = document.createElement("canvas");
      // @ts-ignore
      let context: CanvasRenderingContext2D = canvas.getContext("2d");
      let duration: number;

      let video = document.createElement("video");
      video.preload = "auto";
      video.crossOrigin = "anonymous";

      video.addEventListener("loadeddata", async function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        duration = video.duration;

        let totalFrames: number = 30;
        for (let time = 0; time < duration; time += duration / totalFrames) {
          if (context)
            frames.push(
              await new Promise(
                (
                  resolve: (frame: string) => void,
                  reject: (error: string) => void,
                ) => {
                  let eventCallback = () => {
                    video.removeEventListener("seeked", eventCallback);
                    context.drawImage(
                      video,
                      0,
                      0,
                      video.videoWidth,
                      video.videoHeight,
                    );
                    resolve(canvas.toDataURL());
                  };
                  video.addEventListener("seeked", eventCallback);
                  video.currentTime = time;
                },
              ),
            );
        }
        resolve(frames);
      });
      video.src = videoUrl;
      video.load();
    },
  );
}
