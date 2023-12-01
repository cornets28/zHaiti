import React, { ReactElement } from "react";
import { useScrollTrigger } from "@mui/material";

interface ScrollToColorProps {
  threshold?: number;
  bgColorBefore: string;
  bgColorAfter: string | undefined;
  textColorBefore: string | undefined;
  textColorAfter: string;
  fadeIn: string;
  fadeOut: string;
  paddingBefore: string;
  paddingAfter: string;
  children: ReactElement;
  window?: Window;
}

export default function ScrollToColor02(props: ScrollToColorProps): ReactElement {
  const {
    threshold = 0,
    textColorBefore = "black",
    textColorAfter = "white",
    fadeIn = "0.3s ease-in",
    fadeOut = "0.3s ease-out",
    paddingBefore = "1.563rem",
    paddingAfter = "15px",
    children,
    window,
    ...other
  } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: window ? window : undefined
  });

  return React.cloneElement(children, {
    style: {
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut
    },
    ...other
  });
}
