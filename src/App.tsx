import React, { useCallback, useEffect, useState } from "react";
import { useGetVideoData } from "./hooks/useGetVideoData";
import { EditorScreen } from "./components/editor-screen";
import { HomeScreen } from "./components/home-screen";
import { Layout } from "./components/layout";
import { Caption } from "./hooks/types";
import { useVideoLoad } from "./hooks/useVideoLoad";

function App() {
  const {
    videoUrl,
    endTime: initialEndTime,
    startTime: initialStartTime,
    captions: initialCaptions,
  } = useGetVideoData();

  const { loadVideo, frames, video, isLoading, isLoaded, duration } =
    useVideoLoad(videoUrl);

  const [startTime, setStartTime] = useState(initialStartTime * 60);
  const [endTime, setEndTime] = useState(initialEndTime * 60);

  const [time, setTime] = useState<number>(initialStartTime * 60);

  const [captions] = useState<Caption[]>(initialCaptions);

  const handleClickStart = useCallback(async () => {
    loadVideo();
  }, [loadVideo]);

  const handleChangeStartTime = useCallback(
    (newStartTime: number) => {
      setStartTime(newStartTime);
      if (newStartTime >= time) {
        setTime(newStartTime);
        if (video.current) video.current.currentTime = time;
      }
    },
    [time, video],
  );

  const handleChangeEndTime = useCallback(
    (newEndTime: number) => {
      setEndTime(newEndTime);
      if (newEndTime <= time) {
        setTime(newEndTime);
        if (video.current) video.current.currentTime = time;
      }
    },
    [time, video],
  );

  const handleChangeTime = useCallback(
    (newTime: number) => {
      if (newTime <= startTime) {
        setTime(startTime);
      } else if (newTime >= endTime) {
        setTime(endTime);
      } else if (newTime !== time) {
        setTime(newTime);
      }
    },
    [endTime, startTime, time],
  );

  useEffect(() => {
    if (video.current) {
      video.current.currentTime = time;
    }
  }, [time, video]);

  const renderPage = () => {
    if (isLoaded) {
      return (
        <EditorScreen
          time={time}
          video={video}
          duration={duration}
          startTime={startTime}
          endTime={endTime}
          onChangeStartTime={handleChangeStartTime}
          onChangeEndTime={handleChangeEndTime}
          onChangeTime={handleChangeTime}
          frames={frames}
          captions={captions}
        />
      );
    } else {
      return (
        <HomeScreen onClickStart={handleClickStart} isLoading={isLoading} />
      );
    }
  };

  return <Layout>{renderPage()}</Layout>;
}

export default App;
