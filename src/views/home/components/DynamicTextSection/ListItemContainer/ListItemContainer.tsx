import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { ListItemContainerType } from "../../../../../types/ListItemContainerType";

export const ListItemContainer: FC<ListItemContainerType> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      className="dynamic-texts"
      sx={{
        height: 50,
        lineHeight: 50,
        overflow: "hidden",
        pt: 50,
        marginX: "auto",
      }}
    >
      {children}
    </Grid>
  );
};

ListItemContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListItemContainer;
