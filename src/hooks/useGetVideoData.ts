import { VideoData } from "./types";

const mockData = {
  videoUrl:
    "https://iq-rest.s3.eu-central-1.amazonaws.com/id_246_1732534559723low.mp4",
  startTime: 2,
  endTime: 57,
  captions: [
    {
      word: "Welcome",
      start_time: 120.0,
      end_time: 120.46,
    },
    {
      word: "to",
      start_time: 120.46,
      end_time: 120.92,
    },
    {
      word: "this",
      start_time: 120.92,
      end_time: 121.38,
    },
    {
      word: "exciting",
      start_time: 121.38,
      end_time: 121.85,
    },
    {
      word: "presentation",
      start_time: 121.85,
      end_time: 122.31,
    },
    {
      word: "about",
      start_time: 122.31,
      end_time: 122.77,
    },
    {
      word: "JSON",
      start_time: 122.77,
      end_time: 123.23,
    },
    {
      word: "subtitles",
      start_time: 123.23,
      end_time: 123.69,
    },
    {
      word: "and",
      start_time: 123.69,
      end_time: 124.15,
    },
    {
      word: "how",
      start_time: 124.15,
      end_time: 124.62,
    },
    {
      word: "they",
      start_time: 124.62,
      end_time: 125.08,
    },
    {
      word: "work",
      start_time: 125.08,
      end_time: 125.54,
    },
    {
      word: "effectively",
      start_time: 125.54,
      end_time: 126.0,
    },
    {
      word: "in",
      start_time: 126.0,
      end_time: 126.46,
    },
    {
      word: "multimedia",
      start_time: 126.46,
      end_time: 126.92,
    },
    {
      word: "applications",
      start_time: 126.92,
      end_time: 127.38,
    },
    {
      word: "We",
      start_time: 127.38,
      end_time: 127.85,
    },
    {
      word: "will",
      start_time: 127.85,
      end_time: 128.31,
    },
    {
      word: "start",
      start_time: 128.31,
      end_time: 128.77,
    },
    {
      word: "by",
      start_time: 128.77,
      end_time: 129.23,
    },
    {
      word: "looking",
      start_time: 129.23,
      end_time: 129.69,
    },
    {
      word: "at",
      start_time: 129.69,
      end_time: 130.15,
    },
    {
      word: "a",
      start_time: 130.15,
      end_time: 130.62,
    },
    {
      word: "simple",
      start_time: 130.62,
      end_time: 131.08,
    },
    {
      word: "example",
      start_time: 131.08,
      end_time: 131.54,
    },
    {
      word: "to",
      start_time: 131.54,
      end_time: 132.0,
    },
    {
      word: "illustrate",
      start_time: 132.0,
      end_time: 132.46,
    },
    {
      word: "the",
      start_time: 132.46,
      end_time: 132.92,
    },
    {
      word: "concepts",
      start_time: 132.92,
      end_time: 133.38,
    },
    {
      word: "clearly",
      start_time: 133.38,
      end_time: 133.85,
    },
    {
      word: "This",
      start_time: 133.85,
      end_time: 134.31,
    },
    {
      word: "is",
      start_time: 134.31,
      end_time: 134.77,
    },
    {
      word: "designed",
      start_time: 134.77,
      end_time: 135.23,
    },
    {
      word: "to",
      start_time: 135.23,
      end_time: 135.69,
    },
    {
      word: "help",
      start_time: 135.69,
      end_time: 136.15,
    },
    {
      word: "you",
      start_time: 136.15,
      end_time: 136.62,
    },
    {
      word: "understand",
      start_time: 136.62,
      end_time: 137.08,
    },
    {
      word: "how",
      start_time: 137.08,
      end_time: 137.54,
    },
    {
      word: "timing",
      start_time: 137.54,
      end_time: 138.0,
    },
    {
      word: "and",
      start_time: 138.0,
      end_time: 138.46,
    },
    {
      word: "words",
      start_time: 138.46,
      end_time: 138.92,
    },
    {
      word: "are",
      start_time: 138.92,
      end_time: 139.38,
    },
    {
      word: "synchronized",
      start_time: 139.38,
      end_time: 139.85,
    },
    {
      word: "in",
      start_time: 139.85,
      end_time: 140.31,
    },
    {
      word: "a",
      start_time: 140.31,
      end_time: 140.77,
    },
    {
      word: "video",
      start_time: 140.77,
      end_time: 141.23,
    },
    {
      word: "format",
      start_time: 141.23,
      end_time: 141.69,
    },
    {
      word: "Welcome",
      start_time: 141.69,
      end_time: 142.15,
    },
    {
      word: "to",
      start_time: 142.15,
      end_time: 142.62,
    },
    {
      word: "this",
      start_time: 142.62,
      end_time: 143.08,
    },
    {
      word: "exciting",
      start_time: 143.08,
      end_time: 143.54,
    },
    {
      word: "presentation",
      start_time: 143.54,
      end_time: 144.0,
    },
    {
      word: "about",
      start_time: 144.0,
      end_time: 144.46,
    },
    {
      word: "JSON",
      start_time: 144.46,
      end_time: 144.92,
    },
    {
      word: "subtitles",
      start_time: 144.92,
      end_time: 145.38,
    },
    {
      word: "and",
      start_time: 145.38,
      end_time: 145.85,
    },
    {
      word: "how",
      start_time: 145.85,
      end_time: 146.31,
    },
    {
      word: "they",
      start_time: 146.31,
      end_time: 146.77,
    },
    {
      word: "work",
      start_time: 146.77,
      end_time: 147.23,
    },
    {
      word: "effectively",
      start_time: 147.23,
      end_time: 147.69,
    },
    {
      word: "in",
      start_time: 147.69,
      end_time: 148.15,
    },
    {
      word: "multimedia",
      start_time: 148.15,
      end_time: 148.62,
    },
    {
      word: "applications",
      start_time: 148.62,
      end_time: 149.08,
    },
    {
      word: "We",
      start_time: 149.08,
      end_time: 149.54,
    },
    {
      word: "will",
      start_time: 149.54,
      end_time: 150.0,
    },
    {
      word: "start",
      start_time: 150.0,
      end_time: 150.46,
    },
    {
      word: "by",
      start_time: 150.46,
      end_time: 150.92,
    },
  ],
};

export const useGetVideoData = (): VideoData => {
  return mockData;
};
