import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { CategoryWrapperType } from "../../../../../types/CategoryWrapperType";

export const CategoryWrapper: FC<CategoryWrapperType> = ({ children, temporaryPublic }) => {

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      padding={2}
      sx={{
        marginX: temporaryPublic.length % 2 === 0 ? "auto" : "",
      }}
    >
      {children}
    </Grid>
  );
};

CategoryWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryWrapper;
