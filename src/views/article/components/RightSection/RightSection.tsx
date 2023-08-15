import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { RightSectionType } from "../../../../types/RightSectionType";

export const RightSection: FC<RightSectionType> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        px: { xs: 3, sm: 4, md: 3 },
      }}
    >
      {children}
    </Grid>
  );
};

RightSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RightSection;
