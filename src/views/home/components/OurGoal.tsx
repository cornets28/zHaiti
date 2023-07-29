import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
import Cow from "../../../images/boys.webp";
import Category from "./Category";
import Title from "../../../components/Title/Title";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation()
  const { white2 } = colors;

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={white2}
      textAlign="center"
    >
      <Container>
        <Grid container item py={6}>
          <Title
            text={t("Nou ekri sou tout domèn ki kapab ekziste, tankou: espò, kilti, relijyon, politik, edikasyon, elatriye")}
            title1="Piblik"
            title2="Sib Nou"
          />
          <Grid container py={6}>
            {temporaryPublic &&
              temporaryPublic.map((pub, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  padding={2}
                  key={index}
                  sx={{
                    marginX: temporaryPublic.length % 2 === 0 ? "auto" : "",
                  }}
                >
                  <Category
                    key={index}
                    channel={t(pub.channel)}
                    image={pub.photo}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default OurGoal;
