import { FC } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal/Modal";
import { AddArticlesModalType } from "../../types/AddArticlesModalType";
import ModalAddItemContainer from "./components/ModalContainer/ModalAddItemContainer";
import AddItemCloseButton from "./components/AddItemCloseButton/AddItemCloseButton";

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
      <ModalAddItemContainer>
        <AddItemCloseButton handleClose={handleClose} />
        {children}
      </ModalAddItemContainer>
    </Modal>
  );
};

AddArticlesModal.propTypes = {
  children: PropTypes.any,
  open: PropTypes.any.isRequired,
  handleClose: PropTypes.any,
};

export default AddArticlesModal;
