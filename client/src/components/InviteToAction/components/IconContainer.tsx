import { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../utils/theme/base/colors";
import Box from "@mui/material/Box";
import { IconContainerType } from "../../../types/IconContainerType";

const IconContainer: FC<IconContainerType> = ({ onClick, children, text }) => {
  const { grey } = colors;

  return (
    <Box
      sx={{
        minWidth: 40,
        height: 40,
        border: `1px solid ${grey["500"]}`,
        borderRadius: 50,
        mr: 2,
        p: 1,
        textAlign: "center",
        backgroundColor: grey["100"],
        display: "flex",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: grey["300"],
        },
      }}
      onClick={onClick}
    >
      {children}
      <span style={{ fontSize: 10, marginLeft: 4, paddingTop: 2 }}>
        {text}
      </span>
    </Box>
  );
};

IconContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};

export default IconContainer;
