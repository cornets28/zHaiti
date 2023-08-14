import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { PeopleSayContainerType } from "../../../../../types/PeopleSayContainerType";

export const PeopleSayContainer: FC<PeopleSayContainerType> = ({
  children,
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      textAlign="center"
      position="relative"
      height={600}
    >
      {children}
    </Grid>
  );
};

PeopleSayContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PeopleSayContainer;
