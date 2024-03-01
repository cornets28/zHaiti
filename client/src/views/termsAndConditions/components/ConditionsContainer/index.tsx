import { FC } from "react";
import PropTypes from "prop-types";
import { ConditionsContainerType } from "../../../../types/ConditionsContainerType";
import { Grid } from "../../../../components/Grid/Grid";
const ConditionsContainer: FC<ConditionsContainerType> = ({ children }) => {

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
        {children}
      </Grid>
    </Grid>
  );
};

ConditionsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConditionsContainer;
