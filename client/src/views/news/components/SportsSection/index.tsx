import { FC } from "react";
import PropTypes from "prop-types";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { MainSportsContainer } from "../MainSportsContainer";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import SportsInfoBox from "../SportsInfoBox";
import { SportsSectionType } from "../../../../types/SportsSectionType";
import { useNavigate } from "react-router-dom";


export const SportsSection: FC<SportsSectionType> = ({ header, sportsNews }) => {
  const { error } = colors;
  let navigate = useNavigate()

  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
      {sportsNews && sportsNews.length > 0 && (
        <MainSportsContainer
          // @ts-ignore
          mainImage={sportsNews[0].image}
          // @ts-ignore
          title={sportsNews[0].title}
          // @ts-ignore
          onClick={() =>  navigate(`/aktyalite/espò-yo/${sportsNews[0].id}`)}
        />
      )}
      {/* <RecentCulturesContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageList
            sx={{ width: "100%", height: { md: "64.5vh", lg: "47.5vh" } }}
          >
            {sportsNews.slice(0, 4).map((news: any) => (
              <Image
                image={news?.image}
                alt={news.title}
                key={news.image}
                title={news.title}
                author={news.writer}
                onClick={() =>  navigate(`/aktyalite/espò-yo/${news.id}`)}
              />
            ))}
          </ImageList>
        </Grid>
      </RecentCulturesContainer> */}

      <SportsInfoBox>
        {sportsNews.length > 0 &&
          sportsNews
            .slice(4, 8)
            .map((item: any) => (
              <SectionItem
                image={item.image}
                title={item.title}
                body={item.body}
                date={item.date}
                key={item.image}
                onClick={() =>  navigate(`/aktyalite/espò-yo/${item.id}`)}
              />
            ))}
      </SportsInfoBox>
    </Grid>
  );
};

SportsSection.propTypes = {
  header: PropTypes.string.isRequired,
};

export default SportsSection;
