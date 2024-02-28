import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { CloseSvgIcon } from "../../../../images/svg/CloseSvgIcon";
import { DrawerCloseButtonType } from "../../../../types/DrawerCloseButtonType";

const DrawerCloseButton: FC<DrawerCloseButtonType> = ({ onClose }) => {
  return (
    <Box
      onClick={onClose}
      mr={2}
      mt={2}
      height={20}
      width={20}
      sx={{ cursor: "pointer", right: 0, position: "absolute" }}
    >
      <CloseSvgIcon />
    </Box>
  );
};

DrawerCloseButton.propTypes = {
  onClose: PropTypes.any,
};

export default DrawerCloseButton;
