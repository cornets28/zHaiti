import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { LastestArticlesContainerType } from "../../../../../types/LastestArticlesContainerType";
import colors from "../../../../../utils/theme/base/colors";

const LastestArticlesContainer: FC<LastestArticlesContainerType> = ({
  children,
}) => {
    const {white2} = colors;
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={white2}
      textAlign="center"
    >
      {children}
    </Grid>
  );
};

LastestArticlesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LastestArticlesContainer;
