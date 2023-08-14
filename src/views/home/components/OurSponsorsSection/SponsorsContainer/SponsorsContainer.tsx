import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import colors from "../../../../../utils/theme/base/colors";
import { SponsorsContainerType } from "../../../../../types/SponsorsContainerType";

const SponsorsContainer: FC<SponsorsContainerType> = ({ children }) => {
  const { white2 } = colors;

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={white2}
      textAlign="center"
    >
      {children}
    </Grid>
  );
};

SponsorsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SponsorsContainer;
