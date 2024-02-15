import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { MemeFormContainerType } from "../../../../types/MemeFormContainerType";

const MemeFormContainer: FC<MemeFormContainerType> = ({ children }) => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} id='create-meme'>
       <Grid
        container
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

MemeFormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemeFormContainer;
