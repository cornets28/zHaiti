import type { FC } from "react";
import PropTypes from "prop-types";
import { TopLevelType } from "../../../../types/TopLevelType";
import { Grid } from "../../../../components/Grid/Grid";

export const TopLevel: FC<TopLevelType> = ({ children }) => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} px={2} mb={6}>
      {children}
    </Grid>
  );
};

TopLevel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopLevel;