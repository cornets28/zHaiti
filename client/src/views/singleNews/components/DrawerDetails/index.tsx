import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { DrawerDetailsType } from "../../../../types/DrawerDetailsType";

const DrawerDetails: FC<DrawerDetailsType> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: 550 }, p: 3 }}
    >
      {children}
    </Grid>
  );
};

DrawerDetails.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrawerDetails;
