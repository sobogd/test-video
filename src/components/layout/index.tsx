import { memo, PropsWithChildren } from "react";
import { LayoutBox } from "./styled";

export const Layout = memo((props: PropsWithChildren) => {
  const { children } = props;

  return <LayoutBox>{children}</LayoutBox>;
});
