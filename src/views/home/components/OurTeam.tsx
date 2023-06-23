import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";

import Title from "../../../components/Title";
import TeamInfo from "./TeamInfo";
import Team1 from '../../../images/SamulePic.jpeg'

export const OurTeam: FC = () => {
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
            text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
            title1="Ekip"
            title2="Nou An"
          />
        </Grid>
  
        <Grid container mb={15}>
          <TeamInfo photo={Team1} alt="user 1" fullname="Samuel Cornet" role="CEO & Writer" />
          <TeamInfo photo={Team1} alt="user 1" fullname="John Done" role="Writer"/>
          <TeamInfo photo={Team1} alt="user 1" fullname="Nick Samsom" role="Writer"/>
          <TeamInfo photo={Team1} alt="user 1" fullname="Mills Hooks" role="Writer"/>
          </Grid>
      </Container>
    </Grid>
  );
};

export default OurTeam;
