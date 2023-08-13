import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import {OurTeamWrapperType} from '../../../../../types/OurTeamWrapperType';

export const OurTeamWrapper: FC<OurTeamWrapperType>= ({children, team}) => {

  return (
    <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={3}
    padding={2}
    sx={{ marginX: team.length % 2 !== 0 ? "auto" : "" }}
    >
      {children}
    </Grid>
  );
};

OurTeamWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  team: PropTypes.any.isRequired,
};

export default OurTeamWrapper;