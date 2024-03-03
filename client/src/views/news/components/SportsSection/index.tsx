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
import RedirectLink from "../../../../components/SectionItem/components/RedirectLink/RedirectLink";
import redirectLink from "../../../../routes/caseRoutes";

export const SportsSection: FC<SportsSectionType> = ({
  header,
  sportsNews,
}) => {
  const { error } = colors;
  let navigate = useNavigate();

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
          onClick={() => navigate(`/aktyalite/espò-yo/${sportsNews[0].id}`)}
        />
      )}

      <SportsInfoBox>
        {sportsNews.length > 0 &&
          sportsNews.slice(4, 8).map((item: any) => (
            <SectionItem
              image={item.image}
              title={item.title}
              body={item.description}
              date={item.date}
              key={item.image}
              onClick={() => navigate(`/aktyalite/espò-yo/${item.id}`)}
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
      </SportsInfoBox>
    </Grid>
  );
};

SportsSection.propTypes = {
  header: PropTypes.string.isRequired,
};

export default SportsSection;
