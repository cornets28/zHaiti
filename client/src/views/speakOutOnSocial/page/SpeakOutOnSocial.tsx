import type { FC } from "react";
import LatestArticles from "../components/LatestArticlesSection/LatestArticles";
import MemeHeader from "../components/MemeHeader/MemeHeader";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";

export const SpeakOutOnSocial: FC = () => {
  const {darkBlue} = colors;
  return (
    <Page pageColor={darkBlue.main}>
      <Container>
        <MemeHeader />
        <LatestArticles />
      </Container>
    </Page>
  );
};

export default SpeakOutOnSocial;
