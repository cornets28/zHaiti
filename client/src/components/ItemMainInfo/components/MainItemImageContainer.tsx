import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../Grid/Grid";
import { MainItemImageContainerType } from "../../../types/MainItemImageContainerType";

const MainItemImageContainer: FC<MainItemImageContainerType> = ({
  children,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ mx: { xs: 3, sm: 3, md: "auto", lg: "auto" } }}
    >
      {children}
    </Grid>
  );
};

MainItemImageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainItemImageContainer;
