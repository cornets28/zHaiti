import ScrollToButton from "./ScrollToButton";
import colors from "../../../../utils/theme/base/colors";
import { Button } from "../../../Button/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignInButton = () => {
  const { t } = useTranslation();
  const { error, grey, darkBleu } = colors;
  const navigate = useNavigate();

  return (
    <Stack spacing={3} direction="row">
      {
        // @ts-ignore
        <ScrollToButton
          textColorBefore={grey['100']}
          textColorAfter={grey['100']}
          bgColorBefore={error.main}
          bgColorAfter={darkBleu.main}
          fadeIn={"0.7s ease-in"}
          fadeOut={"0.7s ease-out"}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/signin")}
          >
            {t("Konekte")}
          </Button>
        </ScrollToButton>
      }
    </Stack>
  );
};

export default SignInButton;
