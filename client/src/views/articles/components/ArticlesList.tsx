/* eslint-disable react-hooks/exhaustive-deps */
import { useState, type FC, useEffect } from "react";
import Title from "../../../components/Title/Title";
import Cow from "../../../images/boys.webp";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import MostPopularItem from "../../../components/MostPopularItem/MostPopularItem";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import Pagination from "../../../components/Pagination/Pagination";
import Page from "../../../components/Page/Page";
import { Grid } from "../../../components/Grid/Grid";
import ArticlesWrapper from "../../../components/ArticlesWrapper/ArticlesWrapper";
import LeftSection from "../../../components/LeftSection/LeftSection";
import RightSection from "../../../components/RightSection/RightSection";
import MostReadBody from "../../../components/MostReadBody/MostReadBody";
import ArticlesContainer from "./ArticlesContainer/ArticlesContainer";
import MostReadHeader from "../../article/components/MostReadHeader/MostReadHeader";
import db from "../../../utils/articles.json";

const ArticlesList: FC = () => {
  const { t } = useTranslation();
  const [temporaryArticles, setTemporaryArticles] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTemporaryArticles(db.articles);
  }, [db.articles]);

  return (
    <Page>
      <Grid container item py={6}>
        <Title
          text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
          title1="Tout"
          title2="Atik yo"
        />
      </Grid>

      <ArticlesWrapper>
        <LeftSection>
          {temporaryArticles.map((article: any) => (
            <ArticlesContainer key={article.id}>
              <ArticleCard
                title={article.title}
                writer={article.writer}
                description={article.description}
                reply={article.replies}
                like={article.like}
                image={Cow}
                tooltipTitle="Modifye Atik sa"
                url={`/atik-yo/${article.id}`}
                channel={article.categories[0]}
              />
            </ArticlesContainer>
          ))}
          <Pagination />
        </LeftSection>

        <RightSection>
          <MostReadHeader>{t("Atik Ki Pi Popilè Yo")}</MostReadHeader>
          <MostReadBody>
            {temporaryArticles.map((article: any) => (
              <MostPopularItem
                image={Cow}
                title={article.title}
                views={article.numberOfRead}
                onClick={() => alert("Coming soon")}
                key={article.id}
              />
            ))}
          </MostReadBody>
          <Pub />
        </RightSection>
      </ArticlesWrapper>
    </Page>
  );
};

export default ArticlesList;
