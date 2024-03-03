/* eslint-disable react-hooks/exhaustive-deps */
import { useState, type FC, useEffect } from "react";
import Title from "../../../../components/Title/Title";
import { useTranslation } from "react-i18next";
import Pub from "../../../../components/Pub/Pub";
import ArticlesWrapper from "../../../../components/ArticlesWrapper/ArticlesWrapper";
import LeftSection from "../../../../components/LeftSection/LeftSection";
import RightSection from "../../../../components/RightSection/RightSection";
import db from "../../../../utils/articles.json";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import ItemInfoBox from "../../../../components/ItemInfoBox/ItemInfoBox";
import { Grid } from "../../../../components/Grid/Grid";
import MostPopularItems from "../../../../components/MostPopularItems/MostPopularItems";
import RedirectLink from "../../../../components/SectionItem/components/RedirectLink/RedirectLink";
import redirectLink from "../../../../routes/caseRoutes";
import { useNavigate } from "react-router-dom";

const PoliticsList: FC = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [temporaryPoliticalItems, setTemporaryPoliticalItems] = useState([]);

  console.log("temporaryPoliticalItems: ", temporaryPoliticalItems)
  useEffect(() => {
    const politics = db.articles.filter((article) =>
      article.categories.includes("Politik")
    );
    // @ts-ignore
    setTemporaryPoliticalItems(politics);
  }, [db.articles]);

  return (
    <Grid container>
      <Grid container item py={6}>
        <Title
          text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
          title1="Sa k gen nan"
          title2={t("Politik")}
        />
      </Grid>

      <ArticlesWrapper>
        <LeftSection>
          <Grid container>
            <ItemInfoBox>
              {temporaryPoliticalItems.length > 0 &&
                temporaryPoliticalItems.map((item: any) => (
                  <SectionItem
                    image={item.image}
                    title={item.title}
                    body={item.description}
                    date={item.date}
                    key={item.image}
                    onClick={() => navigate(`/aktyalite/politik/${item.id}`)}
                  >
                    {item.categories &&
                      item.categories.length > 0 &&
                      item.categories.map((category: string, index: number) => (
                        <RedirectLink
                          key={category}
                          href={redirectLink(category)}
                          category={category}
                          isLastItem={index === item.categories.length - 1}
                        />
                      ))}
                  </SectionItem>
                ))}
            </ItemInfoBox>
          </Grid>
        </LeftSection>

        <RightSection>
          <MostPopularItems mostPopularArticles={temporaryPoliticalItems} />
          <Pub />
        </RightSection>
      </ArticlesWrapper>
    </Grid>
  );
};

export default PoliticsList;
