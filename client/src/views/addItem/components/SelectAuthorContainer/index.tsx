import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { SelectAuthorContainerType } from "../../../../types/SelectAuthorContainerType";

const SelectAuthorContainer: FC<SelectAuthorContainerType> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      sx={{
        pl: { xs: "auto", sm: "auto", md: 1, lg: 1 },
        mt: { xs: 2.8, sm: 2.5, md: "auto", lg: "auto" },
      }}
    >
      {children}
    </Grid>
  );
};

SelectAuthorContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SelectAuthorContainer;
