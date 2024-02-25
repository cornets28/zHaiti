import React, { FC } from "react";
import ArticlesContainer from "../../views/articles/components/ArticlesContainer/ArticlesContainer";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useTranslation } from "react-i18next";
import { MostRecentArticlesType } from "../../types/MostRecentArticlesType";
import { Grid } from "../Grid/Grid";
import ThickDivider from "../../views/news/components/ThickDivider/ThickDivider";
import colors from "../../utils/theme/base/colors";
import PropTypes from "prop-types";

const MostRecentArticles: FC<MostRecentArticlesType> = ({
  temporaryArticles,
  header,
}) => {
  const { t } = useTranslation();
  const { error } = colors;
  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
      {temporaryArticles.length > 0 &&
        temporaryArticles.map((article: any, index: number) => (
          <ArticlesContainer key={index}>
            <ArticleCard
              title={article.title}
              channel={t(article.channel)}
              writer={article.writer}
              description={article.description}
              reply={article.replies}
              like={article.likes}
              image={article.image}
              tooltipTitle="Modifye nouvèl sa"
              isNews={true}
              url={`/atik-yo/${article.id}`}
            />
          </ArticlesContainer>
        ))}
    </Grid>
  );
};


MostRecentArticles.propTypes = {
  temporaryArticles: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
};


export default MostRecentArticles;
