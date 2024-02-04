import { makeStyles } from "@mui/styles";
import colors from "../../../utils/theme/base/colors";

const { error } = colors;

export const useArticleCardStyle = makeStyles(() => ({
    cardTicket: {
        position: "absolute",
        marginTop: -190,
        width: 130,
        borderRight: "20px solid transparent",
        paddingTop: -80,
    },

    badgeColorRed: {
        borderTop: `30px solid ${error.focus}`,
    },

    badgeColorOrange: {
        borderTop: `30px solid ${error.main}`,
    }
   
}));
