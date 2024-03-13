import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { AddArticlesContainerType } from "../../../../types/AddArticlesContainerType";

const AddArticlesContainer:FC<AddArticlesContainerType> = ({children}) =>{
  return (
    <Grid
      sx={{
        maxHeight: "80vh",
        overflowY: "scroll",
        pt: { xs: 2 },
        pb: 4,
      }}
    >
      {children}
    </Grid>
  );
}

AddArticlesContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AddArticlesContainer;
