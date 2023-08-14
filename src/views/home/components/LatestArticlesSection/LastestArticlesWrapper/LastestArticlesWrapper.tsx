import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { LastestArticlesWrapperType } from "../../../../../types/LastestArticlesWrapperType";

const LastestArticlesWrapper: FC<LastestArticlesWrapperType> = ({
  children,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} padding={2} marginX="auto">
      {children}
    </Grid>
  );
};

LastestArticlesWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LastestArticlesWrapper;
