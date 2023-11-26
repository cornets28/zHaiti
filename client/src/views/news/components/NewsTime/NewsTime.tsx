import type { FC } from "react";
import PropTypes from "prop-types";
import { NewsTimeType } from "../../../../types/NewsTimeType";
import { Grid } from "../../../../components/Grid/Grid";
import { Typography } from "../../../../components/Typography/Typography";
import typography from "../../../../utils/theme/base/typography";

export const NewsTime: FC<NewsTimeType> = ({ children }) => {
  const { h4 } = typography;
  return (
    <Grid item xs={12} sm={12} md={18} lg={12}>
      <Typography
        fontSize={h4}
        textTransform="uppercase"
        textAlign="center"
        pt={4}
      >
        {children}
      </Typography>
    </Grid>
  );
};

NewsTime.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsTime;
