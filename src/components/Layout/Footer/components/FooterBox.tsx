import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import { FooterBoxType } from "../../../../types/FooterBoxType";

const { error } = colors;
const { h5} = typography;

const FooterBox: FC<FooterBoxType> = ({ header, children }) => (
    <Box>
    <Typography
      sx={{
        fontSize: h5,
        color: error.main,
      }}
      gutterBottom
    >
      {header}
    </Typography>
      {children}
  </Box>
);

export default FooterBox;
