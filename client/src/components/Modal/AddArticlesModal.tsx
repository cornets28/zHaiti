import { FC } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal/Modal";
import { AddArticlesModalType } from "../../types/AddArticlesModalType";
import { Box } from "../Box/Box";
import { CloseSvgIcon } from "../../images/svg/CloseSvgIcon";
import DrawerCloseButton from "../../views/singleNews/components/DrawerCloseButton";

const AddArticlesModal: FC<AddArticlesModalType> = ({
  children,
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          width: "100%",
          maxWidth: { xs: "90%", sm: "80%", md: "80%", lg: "70%" },
          padding: { xs: 2, sm: 3, md: 4, lg: 4 },
          outline: "none",
          borderRadius: 3,
        //   maxHeight: "80vh", overflowY: "scroll" 
        }}
      >
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
        {children}
      </Box>
    </Modal>
  );
};

AddArticlesModal.propTypes = {};

export default AddArticlesModal;
