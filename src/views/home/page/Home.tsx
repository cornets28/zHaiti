import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import DynamicText from "../components/DynamicTextSection/DynamicText";
import OurGoal from "../components/OurGoalSection/OurGoal";
import OurTeam from "../components/OurTeam";
import LatestArticles from "../components/LatestArticlesSection/LatestArticles";
import PeopleSaySection from "../components/PeopleSay";
import OurSponsors from '../components/OurSponsorsSection/OurSponsors';
import HaitiImage from '../components/HaitianImageSection/HaitiImage';

export const Home: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={'hidden'}>
      <DynamicText />
      <OurGoal />
      <HaitiImage />
      <OurTeam />
      <PeopleSaySection />
      <LatestArticles />
      <OurSponsors />
    </Grid>
  );
};

export default Home;
