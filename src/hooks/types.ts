export type Caption = {
  start_time: number;
  end_time: number;
  word: string;
};

export type VideoData = {
  videoUrl: string;
  startTime: number;
  endTime: number;
  captions: Caption[];
};
