import type { FC } from "react";
import { Grid } from "@mui/material";
import type { SimpleGridType } from "../types/SimpleGridType";


const SimpleGrid: FC<SimpleGridType> = ({ children }) => (
  <Grid>{children}</Grid>
);

export default SimpleGrid;
