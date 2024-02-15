import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../components/Grid/Grid";
import { MemeWrapperType } from "../../../types/MemeWrapperType";

export const MemeWrapper: FC<MemeWrapperType> = ({
  children,
  temporaryMemesLen,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      padding={2}
      sx={{
        marginX: temporaryMemesLen.length % 2 === 0 ? "auto" : "",
      }}
    >
      {children}
    </Grid>
  );
};

MemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemeWrapper;
