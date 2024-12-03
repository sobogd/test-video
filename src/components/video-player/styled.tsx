import { Box, Button, Chip, styled } from "@mui/material";

export const PlayerBox = styled(Box)(() => ({
  height: "100%",
  aspectRatio: "9 / 16",
  position: "relative",
}));

export const PlayerVideo = styled("video")(() => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
}));

export const PlayerBoxCaption = styled(Chip)(() => ({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: "15%",
  margin: "0 auto",
  height: "auto",
  width: "auto",
  fontSize: 20,
  color: "black",
  background: "white",
  padding: "20px 0",
  maxWidth: "70%",
}));

export const PlayerButton = styled(Button)(() => ({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  margin: "auto",
  height: 50,
  width: 50,

  svg: {
    width: 35,
    height: 35,
    color: "white",
  },
}));
