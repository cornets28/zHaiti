import { useEffect, type FC, useState } from "react";
import Container from "@mui/material/Container";
import Title from "../../../../components/Title/Title";
import Cow from "../../../../images/boys.webp";
import ArticleCard from "../../../../components/ArticleCard/ArticleCard";
import { Grid } from "../../../../components/Grid/Grid";
import { useTranslation } from "react-i18next";
import LastestArticlesContainer from "./LastestArticlesContainer/LastestArticlesContainer";
import LastestArticlesWrapper from "./LastestArticlesWrapper/LastestArticlesWrapper";

import db from "../../../../utils/articles.json";

const LatestArticles: FC = () => {
  const { t } = useTranslation();
  const [temporaryArticles, setTemporaryArticles] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTemporaryArticles(db.articles)
  },[setTemporaryArticles])

  return (
    <LastestArticlesContainer>
      <Container>
        <Grid container item py={6}>
          <Title
            text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
            title1="Denye"
            title2="Atik yo"
          />
        </Grid>

        <Grid container mb={15}>
          {temporaryArticles.length > 0 &&
            temporaryArticles.slice(0, 3).map((article :any) => (
              <LastestArticlesWrapper key={article.id}>
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
              </LastestArticlesWrapper>
            ))}
        </Grid>
      </Container>
    </LastestArticlesContainer>
  );
};

export default LatestArticles;
