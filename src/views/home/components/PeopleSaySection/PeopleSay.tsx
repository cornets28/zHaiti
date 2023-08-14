import { useState } from "react";
import type { FC } from "react";
import { Grid } from "../../../../components/Grid/Grid";
import { usePeopleSayStyle } from "../../styles/usePeopleSayStyle";
import Title from "../../../../components/Title/Title";
import HaitiFlagLogo from "../../../../images/flagLogo.png";
import user1 from "../../../../images/user1.jpeg";
import user2 from "../../../../images/user2.avif";
import user3 from "../../../../images/user3.avif";
import user4 from "../../../../images/user4.avif";
import user5 from "../../../../images/user5.avif";
import PeopleSayContainer from "./PeopleSayContainer/PeopleSayContainer";
import Overlay from "./Overlay/Overlay";
import PeopleSayItems from "./PeopleSayItems/PeopleSayItems";
import PeopleSayDetails from "./PeopleSayDetails/PeopleSayDetails";
import TeamDetailsContainer from "./TeamDetailsContainer/TeamDetailsContainer";
import TeamDetails from "./TeamDetails/TeamDetails";
import TeamImage from "./TeamImage/TeamImage";
import CarouselButton from "./CarouselButton/CarouselButton";


const team = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    role: "CEO & Founder",
    study: {
      field_1: {
        major: "C. Science",
        university: "University of the People",
      },
    },
    testemonial: [
      "We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.",
    ],
    photo: user1,
  },
  {
    id: 2,
    firstname: "Jannette",
    lastname: "Dun",
    role: "Writing Director",
    study: {
      field_1: {
        major: "Politcs",
        university: "Havard University",
      },
    },
    testemonial: [
      "We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.",
    ],
    photo: user3,
  },
  {
    id: 3,
    firstname: "Nancy",
    lastname: "Carla",
    role: "Writer",
    study: {
      field_1: {
        major: "Poetry",
        university: "University of Spain",
      },
    },
    testemonial: [
      "We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.",
    ],
    photo: user2,
  },
  {
    id: 4,
    firstname: "Pablo",
    lastname: "Hall",
    role: "Writer",
    study: {
      field_1: {
        major: "Literature",
        university: "University of Paris",
      },
    },
    testemonial: [
      "We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.",
    ],
    photo: user3,
  },
  {
    id: 5,
    firstname: "Caline V.",
    lastname: "ALexandre",
    role: "Write & Photographer",
    study: {
      field_1: {
        major: "Art",
        university: "University of the Haiti",
      },
    },
    testemonial: [
      "We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.",
    ],
    photo: user4,
  },
  {
    id: 6,
    firstname: "John",
    lastname: "Doe",
    role: "Writer",
    study: {
      field_1: {
        major: "Geography",
        university: "University of the Haiti",
      },
    },
    testemonial: [
      "We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.",
    ],
    photo: user5,
  },
];

export const PeopleSay: FC = () => {
  const classes = usePeopleSayStyle();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % team.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + team.length) % team.length);
  };

  const currentUser = team[currentIndex];
  return (
    <PeopleSayContainer>
      <img
        className={classes.backgroundImage}
        src={HaitiFlagLogo}
        alt="Haiti Logo Flag"
      />
      <Overlay />

      <PeopleSayItems>
        <Grid item py={6}>
          <Title text="" title1="Sa yo" title2="souvan di" />
        </Grid>

        <Grid container mb={15} height={300} justifyContent="center">
          <Grid item xs={1} sm={1} md={2} lg={2} justifyContent="center">
            <CarouselButton onClick={handlePrev} icon="fa fa-chevron-left"/>
          </Grid>
          <PeopleSayDetails>
            <TeamImage image={currentUser.photo} alt={currentUser.firstname} />
            <TeamDetailsContainer>
              <TeamDetails
                testimonial={currentUser.testemonial[0]}
                fullname={currentUser.firstname + " " + currentUser.lastname}
                role={currentUser.role}
              />
            </TeamDetailsContainer>
          </PeopleSayDetails>
          <Grid item xs={1} sm={1} md={2} lg={2}>
            <CarouselButton onClick={handleNext} icon="fa fa-chevron-right" marginLeft={-5} />
          </Grid>
        </Grid>
      </PeopleSayItems>
    </PeopleSayContainer>
  );
};

export default PeopleSay;
