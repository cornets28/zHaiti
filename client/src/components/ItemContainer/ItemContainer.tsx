import type { FC } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "../../components/Grid/Grid";
import { ItemContainerType } from "../../types/ItemContainerType";


export const ItemContainer: FC<ItemContainerType> = ({ children }) => {
  const isWindowSizeMin1262 = useMediaQuery<any>("(min-width:1262px)");

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={isWindowSizeMin1262 ? 4 : 6}
      padding={2}
      marginX="auto"
    >
      {children}
    </Grid>
  );
};

ItemContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemContainer;