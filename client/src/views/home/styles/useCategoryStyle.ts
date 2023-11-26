import { makeStyles } from "@mui/styles";

export const useCategoryStyle = makeStyles(() => ({
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
}));
