import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { SponsorsWrapperType } from "../../../../../types/SponsorsWrapperType";

const SponsorsWrapper: FC<SponsorsWrapperType> = ({
  children,
  temporarySponsors,
}) => {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      padding={2}
      sx={{
        marginX: temporarySponsors.length % 2 !== 0 ? "auto" : "",
      }}
    >
      {children}
    </Grid>
  );
};

SponsorsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  temporarySponsors: PropTypes.any.isRequired,
};

export default SponsorsWrapper;
