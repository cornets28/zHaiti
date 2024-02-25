import { FC, MouseEvent } from "react";
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

export const CultureSection: FC<CultureSectionType> = ({
  header,
  culturalNews,
}) => {
  const { error } = colors;

  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
      {culturalNews && culturalNews.length > 0 && (
        <MainCultureContainer
          // @ts-ignore
          mainImage={culturalNews[0].image}
          // @ts-ignore
          title={culturalNews[0]?.title}
          onClick={() => "Amen"}
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
                onClick={() => alert("welllll....44")}
              />
            ))}
          </ImageList>
        </Grid>
      </RecentCulturesContainer>

      <CultureInfoBox>
        {culturalNews.length > 0 &&
          culturalNews
            .slice(4, 8)
            .map((item: any) => (
              <SectionItem
                image={item.image}
                title={item.title}
                body={item.body}
                date={item.date}
                key={item.image}
                onClick={() => alert("TBD")}
              />
            ))}
      </CultureInfoBox>
    </Grid>
  );
};

CultureSection.propTypes = {
  header: PropTypes.string.isRequired,
};

export default CultureSection;
