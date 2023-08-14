import type { FC } from "react";
import PropTypes from "prop-types";
import { TextListType } from "../../../../../types/TextListType";
import { Grid } from "../../../../../components/Grid/Grid";

export const TextList: FC<TextListType> = ({ children }) => {
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

TextList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextList;
