import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../Grid/Grid";
import { LeftSectionType } from "../../types/LeftSectionType";

export const LeftSection: FC<LeftSectionType> = ({
  children,
}) => {

  return (
    <Grid container item xs={12} sm={12} md={8} lg={9}>
      {children}
    </Grid>
  );
};

LeftSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeftSection;