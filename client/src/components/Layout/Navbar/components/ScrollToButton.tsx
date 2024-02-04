import React, { ReactElement } from "react";
import { useScrollTrigger } from "@mui/material";
import colors from "../../../../utils/theme/base/colors";

interface ScrollToButtonProps {
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

export default function ScrollToButton(props: ScrollToButtonProps): ReactElement {
    const { error, grey, darkBleu } = colors;
  const {
    threshold = 0,
    textColorBefore = "black",
    textColorAfter = "",
    bgColorBefore = "",
    bgColorAfter = "green",
    fadeIn = "0.3s ease-in",
    fadeOut = "0.3s ease-out",
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
      color: trigger ? textColorAfter : textColorBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      transition: trigger ? fadeIn : fadeOut
    },
    ...other
  });
}
