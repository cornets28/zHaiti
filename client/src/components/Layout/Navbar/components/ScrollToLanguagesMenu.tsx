import React, { ReactElement } from "react";
import { useScrollTrigger } from "@mui/material";
import colors from "../../../../utils/theme/base/colors";

interface ScrollToColorProps {
  threshold?: number | undefined;
  textColorBefore: string | undefined;
  textColorAfter: string;
  fadeIn: string;
  fadeOut: string;
  languagesBgColorBefore: string;
  languagesBgColorAfter: string;
  children: ReactElement;
  window?: Window;
}

const ScrollToLanguagesMenu = (props: ScrollToColorProps): ReactElement => {
  const { error, grey, darkBlue } = colors;

  const {
    threshold = 0,
    textColorBefore = grey[100],
    textColorAfter = grey[100],
    languagesBgColorBefore = darkBlue.main,
    languagesBgColorAfter = error.main,
    fadeIn = "0.3s ease-in",
    fadeOut = "0.3s ease-out",
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
      backgroundColor: trigger ? languagesBgColorBefore : languagesBgColorAfter,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
    },
    ...other,
  });
};

export default ScrollToLanguagesMenu;
