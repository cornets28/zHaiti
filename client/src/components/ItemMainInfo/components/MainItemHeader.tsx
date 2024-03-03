import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../Grid/Grid";
import typography from "../../../utils/theme/base/typography";
import { Typography } from "../../Typography/Typography";
import { MainItemHeaderType } from "../../../types/MainItemHeaderType";

const MainItemHeader: FC<MainItemHeaderType> = ({ title }) => {
  const { h3 } = typography;

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Typography fontSize={h3} textTransform="capitalize" textAlign="center">
        {title}
      </Typography>
    </Grid>
  );
};

MainItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainItemHeader;
