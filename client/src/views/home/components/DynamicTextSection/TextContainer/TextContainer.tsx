import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../../utils/theme/base/colors";
import { TextContainerType } from "../../../../../types/TextContainerType";
import { Grid } from "../../../../../components/Grid/Grid";

export const TextContainer: FC<TextContainerType> = ({ children }) => {
  const { error } = colors;

  return (
    <Grid
      container
      item
      width="100%"
      bgcolor={error.focus}
      overflow="hidden"
      sx={{
        textAlign: "center",
        overflow: "hidden",
        height: { xs: 300, sm: 500, md: 600 },
      }}
    >
      {children}
    </Grid>
  );
};

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextContainer;
