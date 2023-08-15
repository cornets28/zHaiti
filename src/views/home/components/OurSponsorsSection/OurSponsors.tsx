import type { FC } from "react";
import {Container} from "../../../../components/Container/Container";
import Title from "../../../../components/Title/Title";
import Sponsor from "./Sponsor/Sponsor";
import DigicelLogo from "../../../../images/digicelLogo.png";
import { Grid } from "../../../../components/Grid/Grid";
import SponsorsContainer from "./SponsorsContainer/SponsorsContainer";
import SponsorsWrapper from "./SponsorsWrapper/SponsorsWrapper";

const temporarySponsors = [
  {
    id: "1",
    logo: DigicelLogo,
    link: "http://google.com/",
  },
  {
    id: "2",
    logo: DigicelLogo,
    link: "http://google.com/",
  },
  {
    id: "3",
    logo: DigicelLogo,
    link: "http://google.com/",
  },
  {
    id: "4",
    logo: DigicelLogo,
    link: "http://google.com/",
  },
  {
    id: "6",
    logo: DigicelLogo,
    link: "http://google.com/",
  },
];

const OurSponsors: FC = () => {

  return (
    <SponsorsContainer>
      <Container>
        <Grid container item py={6}>
          <Title
            text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
            title1="Esponso"
            title2="Nou yo"
          />
        </Grid>

        <Grid container mb={15}>
          {temporarySponsors.length > 0 &&
            temporarySponsors.map((sponsor, index) => (
              <SponsorsWrapper temporarySponsors key={index}>
                <Sponsor image={sponsor.logo} link={sponsor.link} />
              </SponsorsWrapper>
            ))}
        </Grid>
      </Container>
    </SponsorsContainer>
  );
};

export default OurSponsors;
