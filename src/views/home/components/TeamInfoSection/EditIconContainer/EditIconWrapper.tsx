import type { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../../components/Box/Box";
import colors from "../../../../../utils/theme/base/colors";
import { EditIconWrapperType } from "../../../../../types/EditIconWrapperType";

export const EditIconWrapper: FC<EditIconWrapperType> = ({ children }) => {
  const { error } = colors;

  return (
    <Box
      position={"absolute"}
      color={error.focus}
      width={20}
      height={20}
      right="0"
      mr="5px"
      mt="5px"
      onClick={() => alert("yesss")}
    >
      {children}
    </Box>
  );
};

EditIconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditIconWrapper;
