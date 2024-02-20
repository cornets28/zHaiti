import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { PageHeaderWrapperType } from "../../../../types/PageHeaderWrapperType";

export const PageHeaderWrapper: FC<PageHeaderWrapperType> = ({ children }) => {
  const { darkBlue } = colors;

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={darkBlue.main}
      textAlign="center"
      pt={3}
    >
      {children}
    </Grid>
  );
};

PageHeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeaderWrapper;
