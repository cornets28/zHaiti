import { FC } from "react";
import PropTypes from "prop-types";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import MainCultureContainer from "../MainCultureContainer/MainCultureContainer";
import { RecentCulturesContainer } from "../RecentCulturesContainer/RecentCulturesContainer";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import ImageList from "@mui/material/ImageList";
import Image from "../../../../components/ImageListItemMui/Image";
import CultureInfoBox from "../CulturesInfoBox/CultureInfoBox";
import { CultureSectionType } from "../../../../types/CultureSectionType";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RedirectLink from "../../../../components/SectionItem/components/RedirectLink/RedirectLink";
import redirectLink from "../../../../routes/caseRoutes";

export const CultureSection: FC<CultureSectionType> = ({
  header,
  culturalNews,
}) => {
  const { error } = colors;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
      {culturalNews && culturalNews.length > 0 && (
        <MainCultureContainer
          // @ts-ignore
          mainImage={culturalNews[0].image}
          // @ts-ignore
          title={culturalNews[0]?.title}
          // @ts-ignore
          onClick={() =>
            // @ts-ignore
            navigate(`/${t("aktyalite")}/kilti/${culturalNews[0].id}`)
          }
        />
      )}
      <RecentCulturesContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageList
            sx={{ width: "100%", height: { md: "64.5vh", lg: "47.5vh" } }}
          >
            {culturalNews.slice(0, 4).map((news: any) => (
              <Image
                image={news?.image}
                alt={news.title}
                key={news.image}
                title={news.title}
                author={news.writer}
                onClick={() => navigate(`/aktyalite/kilti/${news.id}`)}
              />
            ))}
          </ImageList>
        </Grid>
      </RecentCulturesContainer>

      <CultureInfoBox>
        {culturalNews.length > 0 &&
          culturalNews.slice(4, 8).map((culture: any) => (
            <SectionItem
              image={culture.image}
              title={culture.title}
              body={culture.description}
              date={culture.date}
              key={culture.image}
              onClick={() => navigate(`/aktyalite/kilti/${culture.id}`)}
            >
              {culture.categories &&
                culture.categories.length > 0 &&
                culture.categories.map((category: string, index: number) => (
                  <RedirectLink
                    key={category}
                    href={redirectLink(category)}
                    category={category}
                    isLastItem={index === culture.categories.length - 1}
                  />
                ))}
            </SectionItem>
          ))}
      </CultureInfoBox>
    </Grid>
  );
};

CultureSection.propTypes = {
  header: PropTypes.string.isRequired,
};

export default CultureSection;
