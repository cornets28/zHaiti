import type { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TitleBottomImg from "../images/title-bottom.webp";
import type { TitleType } from "../types/TitleType";
import colors from "../utils/theme/base/colors";
import typography from "../utils/theme/base/typography";

export const Title: FC<TitleType> = ({ title1, title2, text, color }) => {
  const { error } = colors;
  const { h2, h6 } = typography;

  return (
    <Box justifyItems='cen'>
      <Typography fontSize={h2} textTransform="uppercase" color={color}>
        <span style={{ color: color || error.focus}}>{title1}</span> {title2}{" "}
      </Typography>
      <Box mt={0.3}>
        <img src={TitleBottomImg} alt="titile divider" />{" "}
      </Box>

      <Box sx={{width: { xs: "100%", sm: "90%",  md: "60%"}}} margin='auto'>
        <Typography fontSize={h6} pt={1} textAlign='center' color={color}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
