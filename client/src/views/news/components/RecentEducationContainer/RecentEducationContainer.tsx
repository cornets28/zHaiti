import { FC } from "react";
import PropTypes from "prop-types";
import { RecentEducationContainerType } from "../../../../types/RecentEducationContainerType";
import { Grid } from "../../../../components/Grid/Grid";


export const RecentEducationContainer: FC<RecentEducationContainerType> = ({
  children,
}) => {

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={3}   
      sx={{
        mt: { sm: 0, md: 3, lg: 0 },
        height: { sm: "auto", md: "auto", lg: "51.5vh" },
        py: { md: 1, lg: 2 },
        pt: { md: 1, lg: 2 },
        pl: { sm: 3, md: 0, lg: 0 },
        pr: { sm: 3, md: 0, lg: 0 },
        mx: { xs: 3, md: 0, lg: 0}
      }}
    >
      {children}
    </Grid>
  );
};

RecentEducationContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecentEducationContainer;
