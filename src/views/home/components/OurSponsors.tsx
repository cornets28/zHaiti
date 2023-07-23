import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
import Title from "../../../components/Title";
import Sponsor from '../components/Sponsor';
import DigicelLogo from '../../../images/digicelLogo.png'

const temporarySponsors = [
  {
    id: "1",
    logo: DigicelLogo,
  },
  {
    id: "2",
    logo: DigicelLogo,
  },
  {
    id: "3",
    logo: DigicelLogo,
  },
  {
    id: "4",
    logo: DigicelLogo,
  },
  
];

const OurSponsors: FC = () => {

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
            title1="Esponso"
            title2="Nou yo"
          />
        </Grid>

        <Grid container mb={15}>
          {temporarySponsors &&
            temporarySponsors.map((sponsor, index) => (
              <Grid item xs={6} sm={4} md={3} padding={2} key={index}>
                <Sponsor image={sponsor.logo} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default OurSponsors;
