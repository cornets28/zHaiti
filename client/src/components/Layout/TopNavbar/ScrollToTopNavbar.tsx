import React, { ReactElement } from "react";
import { useScrollTrigger } from "@mui/material";

interface ScrollToColorProps {
  threshold?: number;
  bgColorBefore: string;
  bgColorAfter: string | undefined;
  textColorBefore: string | undefined;
  textColorAfter: string;
  marginTopBefore: string | undefined;
  marginTopAfter: string | undefined;
  fadeIn: string;
  fadeOut: string;
  children: ReactElement;
  window?: Window;
}

export default function ScrollToTopNavbar(
  props: ScrollToColorProps
): ReactElement {
  const {
    threshold = 0,
    textColorBefore = "black",
    textColorAfter = "red",
    fadeIn = "0.3s ease-in",
    fadeOut = "0.3s ease-out",
    marginTopBefore = "-30px",
    marginTopAfter = "0px",
    children,
    window,
    ...other
  } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: window ? window : undefined,
  });

  return React.cloneElement(children, {
    style: {
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
      marginTop: trigger ? marginTopBefore : marginTopAfter,
    },
    ...other,
  });
}
