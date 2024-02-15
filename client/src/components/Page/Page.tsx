import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../components/Grid/Grid";
import { PageType } from "../../types/PageType";

export const Page: FC<PageType> = ({ children, pageColor }) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={pageColor}
      textAlign="center"
    >
      {children}
    </Grid>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
