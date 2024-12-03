import { memo } from "react";
import { HomeScreenProps } from "./types";
import { HomeScreenBox } from "./styled";
import { Button } from "@mui/material";

export const HomeScreen = memo((props: HomeScreenProps) => {
  const { onClickStart, isLoading } = props;

  return (
    <HomeScreenBox>
      <Button
        variant="contained"
        color="primary"
        onClick={!isLoading ? onClickStart : undefined}
      >
        {isLoading ? "Wait please..." : "Start Editing!"}
      </Button>
    </HomeScreenBox>
  );
});
