import type { FC } from "react";
import Container from "@mui/material/Container";
import Cow from "../../../images/boys.webp";
import Category from "./Category";
import { Grid } from "../../../components/Grid/Grid";
import Title from "../../../components/Title/Title";
import { useTranslation } from "react-i18next";
import OurGoalContainer from "../components/OurGoalSection/OurGoalContainer";
import CategoryWrapper from "../components/OurGoalSection/CategoryWrapper";

const temporaryPublic = [
  {
    id: 1,
    photo: Cow,
    channel: "Politik",
  },
  {
    id: 2,
    photo: Cow,
    channel: "Edikasyon",
  },
  {
    id: 3,
    photo: Cow,
    channel: "Relijyon",
  },
  {
    id: 4,
    photo: Cow,
    channel: "Kilti",
  },
  {
    id: 5,
    photo: Cow,
    channel: "Espò",
  },
];

const OurGoal: FC = () => {
  const { t } = useTranslation();

  return (
    <OurGoalContainer>
      <Container>
        <Grid container item py={6}>
          <Title
            text={t(
              "Nou ekri sou tout domèn ki kapab ekziste, tankou: espò, kilti, relijyon, politik, edikasyon, elatriye"
            )}
            title1="Piblik"
            title2="Sib Nou"
          />
          <Grid container py={6}>
            {temporaryPublic &&
              temporaryPublic.map((pub, index) => (
                <CategoryWrapper temporaryPublic={temporaryPublic} key={index}>
                  <Category
                    key={index}
                    channel={t(pub.channel)}
                    image={pub.photo}
                  />
                </CategoryWrapper>
              ))}
          </Grid>
        </Grid>
      </Container>
    </OurGoalContainer>
  );
};

export default OurGoal;
