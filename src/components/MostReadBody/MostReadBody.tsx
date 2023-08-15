import type { FC } from "react";
import PropTypes from "prop-types";
import { MostReadBodyType } from "../../types/MostReadBodyType";
import { Grid } from "../Grid/Grid";

export const MostReadBody: FC<MostReadBodyType> = ({ children }) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{
        overflowY: "scroll",
        height: "65vh",
      }}
    >
      {children}
    </Grid>
  );
};

MostReadBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MostReadBody;
