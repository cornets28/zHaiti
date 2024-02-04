import { FC } from "react";
import PropTypes from "prop-types";
import { RecentCulturesContainerType } from "../../../../types/RecentCulturesContainerType";

import { Grid } from "../../../../components/Grid/Grid";

export const RecentCulturesContainer: FC<RecentCulturesContainerType> = ({
  children,
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={6}
      justifyContent="flex-end"
      sx={{
        mt: { md: 3, lg: 0 },
        height: { sm: "auto", md: "70vh", lg: "51.5vh" },
        py: { md: 1, lg: 2 },
        pl: { sm: 3, md: 0, lg: 2 },
        pr: { sm: 3, md: 0, lg: 0 },
        mx: { xs: 3, md: 0, lg: 0}
      }}
    >
      {children}
    </Grid>
  );
};

RecentCulturesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecentCulturesContainer;
