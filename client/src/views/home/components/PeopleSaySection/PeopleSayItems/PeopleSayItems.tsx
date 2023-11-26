import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { PeopleSayItemsType } from "../../../../../types/PeopleSayItemsType";
import { usePeopleSayStyle } from "../../../styles/usePeopleSayStyle";

export const PeopleSayItems: FC<PeopleSayItemsType> = ({ children }) => {
  const classes = usePeopleSayStyle();
  return (
    <Grid
      className={classes.boxOverLay}
      container
      height="100%"
      justifyContent="center"
    >
      {children}
    </Grid>
  );
};

PeopleSayItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PeopleSayItems;
