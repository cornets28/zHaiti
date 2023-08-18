import type { FC } from "react";
import PropTypes from "prop-types";
import { TopLevelNewsType } from "../../../../types/TopLevelNewsType";
import { Grid } from "../../../../components/Grid/Grid";

export const TopLevelNews: FC<TopLevelNewsType> = ({ children }) => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      {children}
    </Grid>
  );
};

TopLevelNews.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopLevelNews;