import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
import Cow from "../../../images/boys.webp";
import Category from "./Category";

import Title from "../../../components/Title";

const temporaryPublic = [
  {
    id: 1,
    photo: Cow,
    channel: "Politics",
  },
  {
    id: 2,
    photo: Cow,
    channel: "Education",
  },
  {
    id: 3,
    photo: Cow,
    channel: "Spiritualism",
  },
  {
    id: 4,
    photo: Cow,
    channel: "Culture",
  },
  {
    id: 5,
    photo: Cow,
    channel: "Education",
  },
];

const OurGoal: FC = () => {
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
            text="Nou ekri sou tout domen ki kapab ekziste, tankou: espo, kilti, relijyon, politik, edikasyon, elatriye."
            title1="Piblik"
            title2="Sib Nou"
          />
          <Grid container py={6}>
            {temporaryPublic &&
              temporaryPublic.map((pub, index) => (
                <Category key={index} channel={pub.channel} image={pub.photo} />
              ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default OurGoal;
