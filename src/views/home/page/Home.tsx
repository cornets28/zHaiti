import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import HaitiBeach from "../../../images/haitibeach.jpeg";
import DynamicText from "../components/DynamicText";
import OurGoal from "../components/OurGoal";
import OurTeam from "../components/OurTeam";
import LatestArticles from "../components/LatestArticles";

export const Home: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={'hidden'}>
      <DynamicText />
      <OurGoal />

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
          <h1>Nou Se Ayiti E Nou Pou Ayiti</h1>
          <p>Ayiti Toma, Plen lobey, plen bel kote!</p>
        </Grid>
      </Grid>

      <OurTeam />
      <LatestArticles />
    </Grid>
  );
};

export default Home;
