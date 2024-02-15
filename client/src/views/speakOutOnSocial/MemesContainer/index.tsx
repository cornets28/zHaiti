import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../components/Grid/Grid";
import { MemesContainerType } from "../../../types/MemesContainerType";
import colors from "../../../utils/theme/base/colors";

export const MemesContainer: FC<MemesContainerType> = ({ children }) => {
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

MemesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemesContainer;