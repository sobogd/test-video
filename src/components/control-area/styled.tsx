import { Box, Slider, Stack, styled } from "@mui/material";

export const ControlAreaBox = styled(Box)(() => ({
  width: "calc(100% - 20px)",
  height: 80,
  position: "relative",
  margin: 10,
  overflowY: "hidden",
}));

export const ControlAreaFrames = styled(Stack)(() => ({
  width: "100%",
  height: "100%",
  float: "left",
}));

export const ControlAreaFrame = styled("img")(() => ({
  width: "6.666%",
  height: "100%",
  objectFit: "cover",
}));

export const ControlAreaSlider = styled(Slider)(() => ({
  position: "absolute",
  height: "100%",
  padding: 0,
  ".MuiSlider-track": {
    background: "transparent",
    border: 0,
    boxShadow: "0 0 0 100dvw #000000ad",
  },
  ".MuiSlider-thumb": {
    background: "white",
    border: 0,
    height: "60%",
    width: 5,
    borderRadius: 5,
  },
}));

export const ControlAreaTime = styled(Slider)(() => ({
  position: "absolute",
  height: "100%",
  padding: 0,
  pointerEvents: "none",
  ".MuiSlider-track, .MuiSlider-rail": {
    display: "none",
  },
  ".MuiSlider-thumb": {
    background: "white",
    border: 0,
    height: "80%",
    width: 6,
    borderRadius: 5,

    pointerEvents: "all",
  },
}));
