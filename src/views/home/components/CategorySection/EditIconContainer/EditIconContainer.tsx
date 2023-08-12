import { FC } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import colors from "../../../../../utils/theme/base/colors";
import { EditIconContainerType } from "../../../../../types/EditIconContainerType";

const EditIconContainer: FC<EditIconContainerType> = ({ children, onClick }) => {
  const { white2 } = colors;
  return (
    <Box
      position={"absolute"}
      color={white2.main}
      width={20}
      height={20}
      right="0"
      mr="10px"
      mt="5px"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

EditIconContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditIconContainer;
