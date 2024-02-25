import { FC } from "react";
import PropTypes from "prop-types";
import { CallToActionContainerType } from "../../../types/CallToActionContainerType";
import Grid from "@mui/material/Grid/Grid";

const CallToActionContainer: FC<CallToActionContainerType> = ({ children }) => {

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mt={3}
      height={50}
      borderRadius={2}
      p={2}
      bgcolor={""}
    >
      {children}
    </Grid>
  );
};

CallToActionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CallToActionContainer;
