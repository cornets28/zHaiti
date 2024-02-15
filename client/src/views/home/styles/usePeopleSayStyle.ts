import { makeStyles } from "@mui/styles";
import colors from "../../../utils/theme/base/colors";

const { warning, darkBlue } = colors;

export const usePeopleSayStyle = makeStyles(() => ({
  carouselWrepper: {
    backgroundColor: darkBlue.main,
  },
  divider: {
    backgroundColor: warning.focus,
    height: 2,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  boxOverLay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
  },
}));
