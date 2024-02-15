import { FC } from "react";
import PropTypes from "prop-types";
import { NoDataYetType } from "../../types/NoDataYetType";
import { Typography } from "../../components/Typography/Typography";
import { Grid } from "../Grid/Grid";

const NoDataYet: FC<NoDataYetType> = ({ text, fontSize, textAlign, color }) => {
  return (
    <Grid py={6} item xs={12} sm={12} md={12} lg={12}>
      <Typography fontSize={fontSize} textAlign={textAlign} color={color}>
        {text}
      </Typography>
    </Grid>
  );
};

NoDataYet.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoDataYet;
