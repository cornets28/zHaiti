import type { FC } from "react";
import Grid from "@mui/material/Grid";
import HaitiBeach from "../../../images/haitibeach.jpeg";
import { userHaitiImageStyle } from "../styles/userHaitiImageStyle";

const HaitiImage: FC = () => {
  const classes = userHaitiImageStyle();
  return (
    <Grid container position="relative" width={"100%"} height={600}>
      <img
        className={classes.backgroundImage}
        src={HaitiBeach}
        alt="Haiti beach"
      />
      <Grid
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height={"100%"}
        bgcolor="rgba(0, 0, 0, 0.5)"
      ></Grid>
      <Grid className={classes.textOverlay}>
        <h1 className={classes.h1Tag}>Yon Nasyon, Yon Peyi!</h1>
        <p>Ayiti Toma, Peyi Twopikal, Kote Ki Plen Koze!</p>
      </Grid>
    </Grid>
  );
};

export default HaitiImage;
