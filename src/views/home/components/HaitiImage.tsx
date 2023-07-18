import type { FC } from "react";
import Grid from "@mui/material/Grid";
import HaitiBeach from "../../../images/haitibeach.jpeg";


const HaitiImage: FC = () => {
  return (
    <Grid container position="relative" width={"100%"} height={700}>
    <img className="background-image" src={HaitiBeach} alt="Background" />
    <Grid
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height={"100%"}
      bgcolor="rgba(0, 0, 0, 0.5)"
    ></Grid>
    <Grid className="text-overlay">
      <h1>Nou Se Ayiti Epi Nou Pou Ayiti</h1>
      <p>Ayiti Toma, peyi chale, plen bel kote!</p>
    </Grid>
  </Grid>
  );
};

export default HaitiImage;
