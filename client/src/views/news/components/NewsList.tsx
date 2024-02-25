import { useEffect, type FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import Page from "../../../components/Page/Page";
import ArticlesWrapper from "../../../components/ArticlesWrapper/ArticlesWrapper";
import LeftSection from "../../../components/LeftSection/LeftSection";
import RightSection from "../../../components/RightSection/RightSection";
import MostReadHeader from "../../article/components/MostReadHeader/MostReadHeader";
import { CultureSection } from "./CultureSection/CultureSection";
import { EducationSection } from "./EducationSection/EducationSection";
import { MustKnowHaitiansSection } from "./MustKnowHaitiansSection/MustKnowHaitiansSection";
import colors from "../../../utils/theme/base/colors";
import db from "../../../utils/articles.json";
import SportsSection from "./SportsSection";
import TopHighLevelNews from "./TopHihgLevelNews";
import MostRecentArticles from "../../../components/MostRecentArticles/MostRecentArticles";

const NewsList: FC = () => {
  const { t } = useTranslation();
  const { white2 } = colors;
  const [temporaryArticles, setTemporaryArticles] = useState([]);
  const [temporaryImpHaitians, setTemporaryImpHaitians] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTemporaryArticles(db.articles);
    // @ts-ignore
    setTemporaryImpHaitians(db.importantHaitians);
  }, [temporaryArticles, temporaryImpHaitians]);

  return (
    <Page pageColor={white2.main}>
      <ArticlesWrapper>
        <TopHighLevelNews topLevelNews={temporaryArticles} />
        <LeftSection>
          <MostRecentArticles header={t("Atik yo")} temporaryArticles={temporaryArticles} />
          <SportsSection header={t("Espò")} sportsNews={temporaryArticles} />
          <CultureSection
            header={t("Kilti")}
            culturalNews={temporaryArticles}
          />
          <EducationSection
            header={t("Edikasyon")}
            educationalNews={temporaryArticles}
          />
          <MustKnowHaitiansSection
            header={t("Ayisyen ou dwe konnen")}
            importantHaitians={temporaryImpHaitians}
          />
        </LeftSection>

        <RightSection>
          <MostReadHeader>{t("Atik Ki Pi Popilè Yo")}</MostReadHeader>
          {/* <MostReadBody>
            {temporaryArticles &&
              temporaryArticles.map((article, index) => (
                <MostPopularItem
                  image={article.photo}
                  title={article.title}
                  views={article.views}
                  onClick={() => alert("Coming soon")}
                  key={index}
                />
              ))}
          </MostReadBody> */}
          <Pub />
        </RightSection>
      </ArticlesWrapper>
    </Page>
  );
};

export default NewsList;
