import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../Box/Box";
import { ModalAddItemContainerType } from "../../../../types/ModalAddItemContainerType";

const ModalAddItemContainer: FC<ModalAddItemContainerType> = ({ children }) => {
  return (
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
      }}
    >
      {children}
    </Box>
  );
};

ModalAddItemContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalAddItemContainer;
