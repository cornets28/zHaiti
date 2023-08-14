import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { PeopleSayDetailsType } from "../../../../../types/PeopleSayDetailsType";

export const PeopleSayDetails: FC<PeopleSayDetailsType> = ({ children }) => {
  return (
    <Grid item xs={10} sm={10} md={8} lg={8} justifyContent="center" container>
      {children}
    </Grid>
  );
};

PeopleSayDetails.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PeopleSayDetails;
