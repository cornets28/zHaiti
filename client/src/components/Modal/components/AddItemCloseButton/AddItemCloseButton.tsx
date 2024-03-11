import { FC } from "react";
import PropTypes from "prop-types";
import { CloseSvgIcon } from "../../../../images/svg/CloseSvgIcon";
import { Box } from "../../../Box/Box";
import { AddItemCloseButtonType } from "../../../../types/AddItemCloseButtonType";

const AddItemCloseButton: FC<AddItemCloseButtonType> = ({ handleClose }) => {
  return (
    <Box
      onClick={handleClose}
      mr={2}
      mt={-0}
      height={20}
      width={20}
      sx={{ cursor: "pointer", right: 0, position: "absolute" }}
    >
      <CloseSvgIcon />
    </Box>
  );
};

AddItemCloseButton.propTypes = {
    handleClose: PropTypes.func.isRequired,
};

export default AddItemCloseButton;
