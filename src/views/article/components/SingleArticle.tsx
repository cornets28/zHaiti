import React, { FC } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import colors from "../../../utils/theme/base/colors";
import typography from "../../../utils/theme/base/typography";
import MostPopularItem from "../../../components/MostPopularItem/MostPopularItem";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import LightTooltip from "../../../components/Tooltip/Tooltip";
import { ShareSvgIcon } from "../../../images/svg/ShareSvgIcon";
import Cow from "../../../images/JamieFox.webp";
import { useParams } from 'react-router-dom';

const temporaryArticles = [
  {
    id: 1,
    title: "The Buy By the Sea yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Sam Puffy Bark",
    date: "Jully 5, 2023",
    photo: Cow,
    reply: 4,
    like: 0,
    views: 435,
    channel: "Politik",
  },
  {
    id: 2,
    title: "Bella Chaow Chao yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 12, 2023",
    photo: Cow,
    reply: 0,
    like: 19,
    views: 435,
    channel: "Edikasyon",
  },
  {
    id: 3,
    title: "Soldiers are fitghers yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bob Dun",
    date: "Jan 5, 20203",
    photo: Cow,
    reply: 44,
    like: 23,
    views: 435,
    channel: "Relijyon",
  },
  {
    id: 4,
    title: "Check who wants me tonight in the hood",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bad Bad Girl",
    date: "Dec 5, 2023",
    photo: Cow,
    reply: 0,
    like: 0,
    views: 435,
    channel: "Kilti",
  },

  {
    id: 5,
    title: "Should we ascape death yes for the first time?",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Foolsih Woman",
    date: "Jun 5, 2020",
    photo: Cow,
    reply: 23,
    like: 1,
    views: 435,
    channel: "Edikasyon",
  },
  {
    id: 6,
    title: "The doll in the pool yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 5, 2020",
    photo: Cow,
    reply: 4,
    like: 0,
    views: 435,
    channel: "Espò",
  },
  {
    id: 7,
    title: "What to eat on Wenesday yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Crap BooBoo",
    date: "April 5, 2020",
    photo: Cow,
    reply: 0,
    like: 0,
    views: 435,
    channel: "Politik",
  },

  {
    id: 8,
    title: "Bella Chaow Chaow Chaow yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 12, 2023",
    photo: Cow,
    reply: 0,
    like: 19,
    views: 435,
    channel: "Edikasyon",
  },
  {
    id: 9,
    title: "Soldiers are fitghers yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bob Dun",
    date: "Jan 5, 20203",
    photo: Cow,
    reply: 44,
    like: 23,
    views: 435,
    channel: "Relijyon",
  },
  {
    id: 20,
    title: "Check who wants me tonight in the hood",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bad Bad Girl",
    date: "Dec 5, 2023",
    photo: Cow,
    reply: 0,
    like: 0,
    views: 435,
    channel: "Kilti",
  },
];

const temporaryArticle = 
  {
    id: 1,
    title: "The Buy By the Sea yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Sam Puffy Bark",
    date: "Jully 5, 2023",
    photo: Cow,
    reply: 4,
    like: 0,
    views: 435,
    channel: "Politik",
  };

const SingleArticle: FC = () => {
  const { white2, blue, grey } = colors;
  const isWindowSizeMin1513 = useMediaQuery<any>("(min-width:1513px)");
  const isWindowSizeMin1262 = useMediaQuery<any>("(min-width:1262px)");
  const { h6, h5, h3 } = typography;
  const { t } = useTranslation();
  const { id } = useParams();

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
      key={id}
    >
      <Grid
        container
        mb={15}
        mt={10}
        sx={{
          width: {
            sm: "100%",
            md: "100%",
            lg: isWindowSizeMin1513 ? "82%" : "100%",
          },
          mx: "auto",
          px: { sm: 0, md: 4, lg: 5 },
        }}
      >
        <Grid container item xs={12} sm={12} md={8} lg={9}>
          <Grid
            sx={{
              width: {
                sm: "100%",
                md: "100%",
                lg: isWindowSizeMin1513 ? "82%" : "80%",
              },
              mx: { xs: 2, sm: 5, md: 5, lg: "auto" },
            }}
          >
            <Grid item xs={12} sm={12} md={18} lg={12}>
              <Typography
                fontSize={h3}
                textTransform="capitalize"
                textAlign="center"
              >
                When activated, Tooltips display a text label identifying an
                element, such as a description of its function.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={18} lg={12}>
              <Typography
                fontSize={h5}
                textTransform="uppercase"
                textAlign="right"
                mb={-4}
              >
                <span style={{ color: blue.main, fontWeight: "bold" }}>
                  {" "}
                  |{" "}
                </span>
               {temporaryArticle.channel}
              </Typography>
            </Grid>
            <Grid container textAlign="left">
              <Grid item xs={2} sm={2} md={2} lg={2} pt={2.5}>
                <LightTooltip title={t("Pataje atik sa")} placement="right-end">
                  <Box width={25} height={1} sx={{ cursor: "pointer" }}>
                    <ShareSvgIcon />
                  </Box>
                </LightTooltip>
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography
                  fontSize={h6}
                  textTransform="uppercase"
                  textAlign="right"
                  pt={4}
                  color={grey["500"]}
                >
                  {new Date().toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              </Grid>
            </Grid>

            <Box
              component="img"
              height={26}
              width={26}
              sx={{
                height: { xs: "40vh", sm: "40vh", md: "45vh", lg: "55vh" },
                width: "100%",
                marginTop: 2,
              }}
              alt="Main picture"
              src={Cow}
            />
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Typography
                fontSize={h6}
                textTransform="capitalize"
                textAlign="right"
                // pt={4}
                color={grey["500"]}
              >
                <span style={{ color: blue.main, fontWeight: "bold" }}>
                  {" "}
                  |{" "}
                </span>
                Oprah Winfrey is one of America's most famous TV personalities
              </Typography>

              <Grid item xs={12} sm={20} md={12} lg={9}>
                <Typography
                  fontSize={h6}
                  textTransform="capitalize"
                  textAlign="left"
                  pt={4}
                >
                  Jamie Foxx has revealed an intervention from US talk show
                  queen Oprah Winfrey helped him get his life back on track.{" "}
                  <br /> <br />
                  The actor told DJ Howard Stern that Winfrey had rebuked his
                  "gallivanting" and had told him he was "blowing it". <br />{" "}
                  <br />
                  Winfrey, Foxx went on, also arranged a meeting with Sidney
                  Poitier "to make me understand the significance" of being
                  nominated for an Academy Award. <br /> <br />
                  The meeting took place one week before the 2005 Oscars, where
                  Foxx won best actor for playing Ray Charles in Ray. <br />{" "}
                  <br />
                  Foxx, who was also nominated that year for the best supporting
                  actor Oscar, went on to star in Quentin Tarantino's western
                  Django Unchained. <br /> <br />
                  "You know me, I was going hard," the 49-year-old told Stern
                  this week during an appearance on the latter's radio show.
                  "I'm having such a good time, and I'm not knowing I'm
                  [expletive] up. I'm drinking, I'm doing every [expletive]
                  thing you can possibly imagine." "That's not what you want to
                  do," Foxx recalled Winfrey telling him in an unexpected phone
                  call. "I want to take you somewhere." This led to a visit to
                  Quincy Jones's house, where he was told by the legendary
                  producer: "You're doing good, man, we just don't want you to
                  blow it, baby."

                  Winfrey, Foxx went on, also arranged a meeting with Sidney
                  Poitier "to make me understand the significance" of being
                  nominated for an Academy Award. <br /> <br />
                  The meeting took place one week before the 2005 Oscars, where
                  Foxx won best actor for playing Ray Charles in Ray. <br />{" "}
                  <br />
                  Foxx, who was also nominated that year for the best supporting
                  actor Oscar, went on to star in Quentin Tarantino's western
                  Django Unchained. <br /> <br />
                  "You know me, I was going hard," the 49-year-old told Stern
                  this week during an appearance on the latter's radio show.
                  "I'm having such a good time, and I'm not knowing I'm
                  [expletive] up. I'm drinking, I'm doing every [expletive]
                  thing you can possibly imagine." "That's not what you want to
                  do," Foxx recalled Winfrey telling him in an unexpected phone
                  call. "I want to take you somewhere." This led to a visit to
                  Quincy Jones's house, where he was told by the legendary
                  producer: "You're doing good, man, we just don't want you to
                  blow it, baby."
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            px: { xs: 3, sm: 4, md: 3 },
          }}
        >
          <Typography
            fontSize={h6}
            textTransform="uppercase"
            pb={3}
            textAlign="left"
            sx={{ pt: { xs: 6, sm: 6, md: 1 } }}
          >
            {t("Atik Ki Pi Popilè Yo")}
          </Typography>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              overflowY: "scroll",
              height: "65vh",
            }}
          >
            {temporaryArticles &&
              temporaryArticles.map((article, index) => (
                <MostPopularItem
                  image={article.photo}
                  title={article.title}
                  views={article.views}
                  onClick={() => alert("Coming soon")}
                  key={index}
                />
              ))}
          </Grid>
          <Pub />
        </Grid>
      </Grid>
    </Grid>
  );
};

SingleArticle.propTypes = {};

export default SingleArticle;
