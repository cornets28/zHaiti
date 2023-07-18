import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import DynamicText from "../components/DynamicText";
import OurGoal from "../components/OurGoal";
import OurTeam from "../components/OurTeam";
import LatestArticles from "../components/LatestArticles";
import PeopleSaySeaction from "../components/PeopleSay";
import OurSponsors from '../components/OurSponsors';
import HaitiImage from '../components/HaitiImage';

export const Home: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={'hidden'}>
      <DynamicText />
      <OurGoal />
      <HaitiImage />
      <OurTeam />
      <PeopleSaySeaction />
      <LatestArticles />
      <OurSponsors />
    </Grid>
  );
};

export default Home;
