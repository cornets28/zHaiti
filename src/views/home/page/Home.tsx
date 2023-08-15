import type { FC } from "react";
import DynamicText from "../components/DynamicTextSection/DynamicText";
import OurGoal from "../components/OurGoalSection/OurGoal";
import OurTeam from "../components/OurTeamSection/OurTeam";
import LatestArticles from "../components/LatestArticlesSection/LatestArticles";
import PeopleSaySection from "../components/PeopleSaySection/PeopleSay";
import OurSponsors from '../components/OurSponsorsSection/OurSponsors';
import HaitiImage from '../components/HaitianImageSection/HaitiImage';
import Page from "../../../components/Page/Page";

export const Home: FC = () => {

  return (
    <Page>
      <DynamicText />
      <OurGoal />
      <HaitiImage />
      <OurTeam />
      <PeopleSaySection />
      <LatestArticles />
      <OurSponsors />
    </Page>
  );
};

export default Home;
