/* eslint-disable react-hooks/exhaustive-deps */
import { useState, type FC, useEffect } from "react";
// import Title from "../../../components/Title/Title";
import Cow from "../../../../images/boys.webp";
import ArticleCard from "../../../../components/ArticleCard/ArticleCard";
import { useTranslation } from "react-i18next";
// import Pub from "../../../components/Pub/Pub";
// import Pagination from "../../../components/Pagination/Pagination";
// import Page from "../../../components/Page/Page";
// import { Grid } from "../../../components/Grid/Grid";
import ArticlesWrapper from "../../../../components/ArticlesWrapper/ArticlesWrapper";
import LeftSection from "../../../../components/LeftSection/LeftSection";
import RightSection from "../../../../components/RightSection/RightSection";
// import ArticlesContainer from "./ArticlesContainer/ArticlesContainer";

import db from "../../../../utils/articles.json";
import ItemContainer from "../../../../components/ItemContainer/ItemContainer";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import ItemInfoBox from "../../../../components/ItemInfoBox/ItemInfoBox";
import { Grid } from "../../../../components/Grid/Grid";
// import colors from "../../../utils/theme/base/colors";
// import MostPopularItems from "../../../components/MostPopularItems/MostPopularItems";

const PoliticsList: FC = () => {
  const { t } = useTranslation();
  //   const { white2 } = colors;
  const [temporaryArticles, setTemporaryArticles] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTemporaryArticles(db.articles);
  }, [db.articles]);

  return (
    // <Page pageColor={white2.main}>
    //   <Grid container item py={6}>
    //     <Title
    //       text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
    //       title1="Tout"
    //       title2="Atik yo"
    //     />
    //   </Grid>

    <ArticlesWrapper>
      <LeftSection>
        <Grid container>
          <ItemInfoBox>
            {temporaryArticles.length > 0 &&
              temporaryArticles
                .map((item: any) => (
                  <SectionItem
                    image={item.image}
                    title={item.title}
                    body={item.description}
                    date={item.date}
                    key={item.image}
                    onClick={() => alert("dsdsds")}
                  />
                ))}
          </ItemInfoBox>
        </Grid>
      </LeftSection>

      <RightSection>
        {/* <MostPopularItems mostPopularArticles={temporaryArticles} />
          <Pub /> */}
        xsxzxsx
      </RightSection>
    </ArticlesWrapper>
    // </Page>
  );
};

export default PoliticsList;
