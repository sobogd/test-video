import { Box, Button, Stack, styled } from "@mui/material";

export const CaptionsAreaBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  overflowY: "scroll",
}));

export const CaptionsAreaStack = styled(Stack)(() => ({
  width: "100%",
  padding: 10,
  boxSizing: "border-box",
}));

export const CaptionsAreaButton = styled(Button)(() => ({
  color: "white",
  borderRadius: 10,
  cursor: "pointer",
  textTransform: "none",
  transition: "none",
  "*": {
    transition: "none",
  },
}));
