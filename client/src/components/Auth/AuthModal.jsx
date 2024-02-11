import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import StaticLogo from "../Logo/StaticLogo";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import colors from "../../utils/theme/base/colors";

const actionState = {
  signin: "signin",
  signup: "signup"
};

const AuthModal = () => {
  const { authModalOpen } = useSelector((state) => state.authModal);
  const { darkBlue } = colors;

  const dispatch = useDispatch();

  const [action, setAction] = useState(actionState.signin);

  useEffect(() => {
    if (authModalOpen) setAction(actionState.signin);
  }, [authModalOpen]);

  const handleClose = () => dispatch(setAuthModalOpen(false));

  const switchAuthState = (state) => setAction(state);

  return (
    <Modal open={authModalOpen} onClose={handleClose}>
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "600px",
        padding: 4,
        outline: "none"
      }}>
        <Box sx={{ padding: 4, boxShadow: 24, backgroundColor: darkBlue.main }}>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <StaticLogo />
          </Box>

          {action === actionState.signin && <SignInForm switchAuthState={() => switchAuthState(actionState.signup)} />}

          {action === actionState.signup && <SignUpForm switchAuthState={() => switchAuthState(actionState.signin)} />}
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModal;