import { FC } from "react";
import PropTypes from "prop-types";
import { Typography } from "../../../../components/Typography/Typography";
import { Grid } from "../../../../components/Grid/Grid";
import { SingleNewsTitleType } from "../../../../types/SingleNewsTitleType";
import typography from "../../../../utils/theme/base/typography";

const SingleNewsTitle: FC<SingleNewsTitleType> = ({ title }) => {
  const { h3 } = typography;
  return (
    <Grid item xs={12} sm={12} md={18} lg={12}>
      <Typography fontSize={h3} textTransform="capitalize" textAlign="center">
        {title}
      </Typography>
    </Grid>
  );
};

SingleNewsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SingleNewsTitle;
