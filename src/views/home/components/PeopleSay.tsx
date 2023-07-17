import { useState } from "react";
import type { FC } from "react";
import Grid from "@mui/material/Grid";
import { PeopleSayType } from "../../../types/PeopleSayType";
import colors from "../../../utils/theme/base/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import typography from "../../../utils/theme/base/typography";
import { usePeopleSayStyle } from "../styles/usePeopleSayStyle";
import Title from "../../../components/Title";
import HaitiFlagLogo from "../../../images/flagLogo.png";
import user1 from "../../../images/user1.jpeg";
import user2 from "../../../images/user2.avif";
import user3 from "../../../images/user3.avif";
import user4 from "../../../images/user4.avif";
import user5 from "../../../images/user5.avif";
import Divider from "@mui/material/Divider/Divider";

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

export const PeopleSay: FC<PeopleSayType> = () => {
  const { white2, grey, warning } = colors;
  const { h6, h5 } = typography;
  const classes = usePeopleSayStyle();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % team.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + team.length) % team.length);
  };

  const buttonMove = (onClick: any, marginLeft: number, icon: string) => (
    <Button
      onClick={onClick}
      sx={{
        fontSize: 30,
        height: 30,
        marginTop: 10,
        marginLeft: { xs: marginLeft },
      }}
    >
      <i className={icon} aria-hidden="true"></i>
    </Button>
  );

  const currentUser = team[currentIndex];
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      textAlign="center"
      position="relative"
      height={600}
    >
      <img
        className={classes.backgroundImage}
        src={HaitiFlagLogo}
        alt="Haiti Logo Flag"
      />
      <Grid
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height={"100%"}
        bgcolor="#081329da"
      />

      <Grid
        className={classes.boxOverLay}
        container
        height="100%"
        justifyContent="center"
      >
        <Grid item py={6}>
          <Title text="" title1="Sa yo" title2="souvan di" />
        </Grid>

        <Grid container mb={15} height={300} justifyContent="center">
          <Grid item xs={1} sm={1} md={2} lg={2} justifyContent="center">
            {buttonMove(handlePrev, 0, "fa fa-chevron-left")}
          </Grid>

          <Grid
            item
            xs={10}
            sm={10}
            md={8}
            lg={8}
            justifyContent="center"
            container
          >
            <Box
              component="img"
              bgcolor={grey["300"]}
              alignItems="center"
              marginBottom={10}
              sx={{
                height: 153,
                width: 153,
                borderRadius: 50,
              }}
              src={currentUser.photo}
              alt={currentUser.firstname}
            />
            <Grid
              item
              justifyContent="center"
              position="absolute"
              marginTop={22}
              width={800}
              sx={{ width: { xs: 300, sm: 400, md: 500, lg: 800 } }}
            >
              <Divider className={classes.divider} />
              <Typography
                fontSize={h6}
                color={white2.main}
                textAlign="center"
                marginTop={2}
                marginBottom={2}
              >
                {currentUser.testemonial[0]}
              </Typography>

              <Typography
                fontSize={h5}
                color={warning.focus}
                textAlign="center"
              >
                {currentUser.firstname + " " + currentUser.lastname}
              </Typography>

              <Typography fontSize={h6} color={white2.main} textAlign="center">
                {currentUser.role}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} md={2} lg={2}>
            {buttonMove(handleNext, -5, "fa fa-chevron-right")}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PeopleSay;
