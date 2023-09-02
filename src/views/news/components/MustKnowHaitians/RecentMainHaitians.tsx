import { FC } from "react";
import PropTypes from "prop-types";
import { RecentMainHaitiansType } from "../../../../types/RecentMainHaitiansType";

import { Grid } from "../../../../components/Grid/Grid";

export const RecentMainHaitians: FC<RecentMainHaitiansType> = ({
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
      // bgcolor={"green"}
      justifyContent="flex-end"
      sx={{mt: {md: 3, lg: 0}, height: {sm: 'auto', md: "70vh", lg: "51.5vh"}, py: {md: 1, lg: 2}, px: {sm: 3, md: 0, lg: 2}}}
    >
      {children}
    </Grid>
  );
};

RecentMainHaitians.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecentMainHaitians;
