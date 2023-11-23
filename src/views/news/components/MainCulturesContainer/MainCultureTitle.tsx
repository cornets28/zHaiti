import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { MainCultureTitleType } from "../../../../types/MainCultureTitleType";
import { Grid } from "../../../../components/Grid/Grid";
import Typography from "@mui/material/Typography";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";

export const MainCultureTitle: FC<MainCultureTitleType> = ({ children }) => {
  const { h5 } = typography;
  const { black } = colors;

  return (
    <Typography
      fontSize={h5}
      color={black.main}
      mt={2}
      textTransform="capitalize"
      component="div"
      sx={{ paddingLeft: { xs: "2%", sm: 0 } }}
    >
      {children}
    </Typography>
  );
};

MainCultureTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainCultureTitle;
