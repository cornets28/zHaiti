import React, { FC } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid/Grid";
import { DrawerContainerType } from "../../../../types/DrawerContainerType";

const DrawerContainer: FC<DrawerContainerType> = ({ children }) => {
  return (
    <Grid container item xs={12} sm={12} md={6} lg={4}>
      {children}
    </Grid>
  );
};

DrawerContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrawerContainer;
