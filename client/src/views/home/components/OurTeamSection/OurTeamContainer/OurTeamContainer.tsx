import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../../utils/theme/base/colors";
import { Grid } from "../../../../../components/Grid/Grid";
import {OurTeamContainerType} from '../../../../../types/OurTeamContainerType';

export const OurTeamContainer: FC<OurTeamContainerType>= ({children}) => {
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

OurTeamContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OurTeamContainer;
