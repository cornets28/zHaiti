import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { TeamDetailsContainerType } from "../../../../../types/TeamDetailsContainerType";

export const TeamDetailsContainer: FC<TeamDetailsContainerType> = ({
  children,
}) => {
  return (
    <Grid
      item
      justifyContent="center"
      position="absolute"
      marginTop={22}
      width={800}
      sx={{ width: { xs: 300, sm: 400, md: 500, lg: 800 } }}
    >
      {children}
    </Grid>
  );
};

TeamDetailsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeamDetailsContainer;
