import { FC } from "react";
import PropTypes from "prop-types";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { MainCultureContainer } from "../MainCultureContainer/MainCultureContainer";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import Image from "../../../../components/ImageListItemMui/Image";
import CultureInfoBox from "../CulturesInfoBox/CultureInfoBox";
import { EducationSectionType } from "../../../../types/EducationSectionType";
import RecentEducationContainer from "../RecentEducationContainer/RecentEducationContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImageList } from "../../../../components/ImageList/ImageList";

export const EducationSection: FC<EducationSectionType> = ({
  header,
  educationalNews,
}) => {
  const { error } = colors;
  const isWindowSizeMin1200 = useMediaQuery<any>("(min-width:1200px)");

  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />

      {isWindowSizeMin1200 && (
        <RecentEducationContainer>
          <Grid item xs={12} sm={12} md={12} lg={12} pt={4}>
            {educationalNews.length > 0 &&
              educationalNews
                .slice(1, 3)
                .map((news: any) => (
                  <Image
                    image={news.image}
                    alt={news.title}
                    key={news.image}
                    title={news.title}
                    author={news.writer}
                    onClick={() => alert("welllll....44")}
                    marginTop={1.67}
                    marginRight={1}
                  />
                ))}
          </Grid>
        </RecentEducationContainer>
      )}

      {educationalNews.length > 0 && (
        <MainCultureContainer
          // @ts-ignore
          mainImage={educationalNews[0].image}
          // @ts-ignore
          title={educationalNews[0].title}
        />
      )}
      <RecentEducationContainer>
        <Grid item xs={12} sm={12} md={12} lg={12} pt={4}>
          {isWindowSizeMin1200 && educationalNews.length > 0 ? (
            educationalNews
              .slice(3, 5)
              .map((item: any) => (
                <Image
                  image={item.image}
                  alt={item.title}
                  key={item.image}
                  title={item.title}
                  author={item.writer}
                  onClick={() => alert("welllll....44")}
                  marginTop={1.67}
                  marginLeft={1}
                />
              ))
          ) : (
            <ImageList
              sx={{ width: "100%", height: { md: "auto", lg: "47.5vh" } }}
            >
              {educationalNews.slice(0, 4).map((item: any) => (
                <Image
                  image={item.image}
                  alt={item.title}
                  key={item.image}
                  title={item.title}
                  author={item.writer}
                  onClick={() => alert("welllll....44")}
                />
              ))}
            </ImageList>
          )}
        </Grid>
      </RecentEducationContainer>

      <CultureInfoBox>
        {educationalNews.length > 0 &&
          educationalNews
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

EducationSection.propTypes = {
  header: PropTypes.string.isRequired,
};

export default EducationSection;
