import type { FC } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@mui/material";
import type { SimpleGridType } from "../../types/SimpleGridType";


const SimpleGrid: FC<SimpleGridType> = ({ children }) => (
  <Grid>{children}</Grid>
);

SimpleGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default SimpleGrid;
