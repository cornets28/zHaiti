import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../Grid/Grid";
import colors from "../../utils/theme/base/colors";
import { PageHeaderContainerType } from "../../types/PageHeaderContainerType";
import { Divider } from "../Divider/Divider";

const PageHeaderContainer: FC<PageHeaderContainerType> = ({ children }) => {
  const { grey } = colors;
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ paddingX: { xs: 3, sm: 3, md: 0, lg: 0 }, paddingY: { lg: 5 } }}
      >
        <Divider color={grey["100"]} flexItem sx={{ height: 4, my: 2 }} />
        {children}
        <Divider color={grey["100"]} flexItem sx={{ height: 4, mt: 2 }} />
      </Grid>
    </Grid>
  );
};

PageHeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeaderContainer;
