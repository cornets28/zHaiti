import { FC } from "react";
import PropTypes from "prop-types";
import { CloseSvgIcon } from "../../../../images/svg/CloseSvgIcon";
import { Box } from "../../../Box/Box";
import { AddItemCloseButtonType } from "../../../../types/AddItemCloseButtonType";

const AddItemCloseButton: FC<AddItemCloseButtonType> = ({ handleClose }) => {
  return (
    <Box
      onClick={handleClose}
      height={20}
      width={20}
      sx={{ cursor: "pointer", right: 0, position: "absolute",
      mt: {xs: -1, sm: -1.5, md: -2, lg: -2},
      mr: {xs: .6, sm: 1, md: 1.5, lg: 1.5} }}
    >
      <CloseSvgIcon />
    </Box>
  );
};

AddItemCloseButton.propTypes = {
    handleClose: PropTypes.func.isRequired,
};

export default AddItemCloseButton;
