import type { FC } from "react";
import { Container } from "../../../../components/Container/Container";
import { Grid } from "../../../../components/Grid/Grid";
import Title from "../../../../components/Title/Title";
import TeamInfo from "../TeamInfoSection/TeamInfo";
import user1 from "../../../../images/user1.jpeg";
import user2 from "../../../../images/user2.avif";
import user3 from "../../../../images/user3.avif";
import user4 from "../../../../images/user4.avif";
import user5 from "../../../../images/user5.avif";
import OurTeamContainer from "./OurTeamContainer/OurTeamContainer";
import OurTeamWrapper from "./OurTeamWrapper/OurTeamWrapper";

const team = [
  {
    firstname: "John",
    lastname: "Doe",
    role: "CEO & Founder",
    study: {
      field_1: {
        major: "C. Science",
        university: "University of the People",
      },
    },
    photo: user1,
  },
  {
    firstname: "Jannette",
    lastname: "Dun",
    role: "Writing Director",
    study: {
      field_1: {
        major: "Politcs",
        university: "Havard University",
      },
    },
    photo: user3,
  },
  {
    firstname: "Nancy",
    lastname: "Carla",
    role: "Writer",
    study: {
      field_1: {
        major: "Poetry",
        university: "University of Spain",
      },
    },
    photo: user2,
  },
  {
    firstname: "Pablo",
    lastname: "Hall",
    role: "Writer",
    study: {
      field_1: {
        major: "Literature",
        university: "University of Paris",
      },
    },
    photo: user3,
  },
  {
    firstname: "Caline V.",
    lastname: "ALexandre",
    role: "Write & Photographer",
    study: {
      field_1: {
        major: "Art",
        university: "University of the Haiti",
      },
    },
    photo: user4,
  },
  {
    firstname: "John",
    lastname: "Doe",
    role: "Writer",
    study: {
      field_1: {
        major: "Geography",
        university: "University of the Haiti",
      },
    },
    photo: user5,
  },
];

export const OurTeam: FC = () => {

  return (
    <OurTeamContainer>
      <Container>
        <Grid container item py={6}>
          <Title
            text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
            title1="Ekip"
            title2="Nou An"
          />
        </Grid>

        <Grid container mb={15}>
          {team &&
            team.map((person, index) => (
              <OurTeamWrapper key={index} team={team}>
                <TeamInfo
                  photo={person.photo}
                  alt="user photo"
                  fullname={person.firstname + " " + person.lastname}
                  role={person.role}
                  study={person.study.field_1.major}
                  university={person.study.field_1.university}
                />
              </OurTeamWrapper>
            ))}
        </Grid>
      </Container>
    </OurTeamContainer>
  );
};

export default OurTeam;
