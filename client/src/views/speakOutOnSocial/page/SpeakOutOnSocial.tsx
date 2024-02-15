import type { FC } from "react";
import LatestArticles from "../components/LatestArticlesSection/LatestArticles";
import MemeHeader from "../components/MemeHeader/MemeHeader";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
import CreateMeme from "../components/CreateMeme";
import ListOfMemes from "../components/ListOfMemes";

export const SpeakOutOnSocial: FC = () => {
  const { darkBlue } = colors;
  return (
    <Page pageColor={darkBlue.main}>
      <Container>
        <MemeHeader />
        <CreateMeme />
        <ListOfMemes />
        <LatestArticles />
      </Container>
    </Page>
  );
};

export default SpeakOutOnSocial;
