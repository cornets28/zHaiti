import React, { FC } from "react";
import PropTypes from "prop-types";
import { Divider } from "../../Divider/Divider";
import { Grid } from "../../Grid/Grid";
import { AuthorContainerType } from "../../../types/AuthorContainerType";

const AuthorContainer: FC<AuthorContainerType> = ({ children }) => {
  return (
    <Grid item xs={12} sm={12} md={8} lg={8} mt={3} borderRadius={2} py={2}>
      <Divider />
      <Grid container item xs={12} sm={12} md={12} lg={12} py={1} px={2}>
        <Divider />
        {children}
      </Grid>
      <Divider />
    </Grid>
  );
};

AuthorContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorContainer;
