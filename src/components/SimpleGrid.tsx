import type { FC } from "react";
import type { SimpleGridType } from "../types/SimpleGridType";
import { Grid } from "@mui/material";

const SimpleGrid: FC<SimpleGridType> = ({ children }) => (
  <Grid>{children}</Grid>
);

export default SimpleGrid;
