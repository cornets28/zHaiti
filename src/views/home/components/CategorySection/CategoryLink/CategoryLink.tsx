import { FC } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { CategoryLinkType } from "../../../../../types/CategoryLinkType";

const CategoryLink: FC<CategoryLinkType> = ({ children, url }) => (
  <Grid
    position="absolute"
    top="5%"
    left="5%"
    width="90%"
    height={"90%"}
    bgcolor="#c70505aa"
    component={Link}
    to={url}
    sx={{
      textDecoration: "none",
    }}
  >
    {children}
  </Grid>
);

CategoryLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryLink;
