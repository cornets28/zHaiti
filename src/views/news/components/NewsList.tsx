import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Cow from "../../../images/boys.webp";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import typography from "../../../utils/theme/base/typography";
import MostPopularItem from "../../../components/MostPopularItem/MostPopularItem";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import Pagination from "../../../components/Pagination/Pagination";
import Box from "@mui/material/Box";
import MoreNewsContainerType from "./MoreNewsContainer";
import Image from "./Image";

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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Scroll down and write down the ones that do makes sense.",
    author: "Daniel Booster",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Tweak them a little so they are grammatically correct.",
    author: "Paul Looman",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Research the competition and see what are they up to.",
    author: "Nelly Clown",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Research the competition and see what are they up to.",
    author: "Frenge Ben",
  },
];

const NewsList: FC = () => {
  const { t } = useTranslation();
  const { white2 } = colors;
  const isWindowSizeMin1513 = useMediaQuery<any>("(min-width:1513px)");
  const isWindowSizeMin1262 = useMediaQuery<any>("(min-width:1262px)");
  const { h6, h4 } = typography;

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
      <Grid
        container
        mb={15}
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
        <Grid container item xs={12} sm={12} md={12} lg={12} px={2} mb={6}>
          <Grid item xs={12} sm={12} md={18} lg={12}>
            <Typography
              fontSize={h4}
              textTransform="uppercase"
              textAlign="center"
              pt={4}
            >
              {new Date().toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Typography>
          </Grid>

          <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                component="img"
                height={26}
                width={26}
                sx={{
                  height: { xs: "30vh", sm: "40vh", md: "45vh", lg: "55vh" },
                  width: "100%",
                  marginTop: 2,
                }}
                alt="Main picture"
                src={Cow}
              />
            </Grid>

            <MoreNewsContainerType>
              {itemData.map((item) => (
                <Image
                  image={item.img}
                  alt={item.title}
                  key={item.img}
                  title={item.title}
                  author={item.author}
                  onClick={() => alert("welllll....")}
                />
              ))}
            </MoreNewsContainerType>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={9} md={8} lg={9}>
          {temporaryArticles &&
            temporaryArticles.map((article, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={isWindowSizeMin1262 ? 4 : 6}
                padding={2}
                marginX="auto"
                key={index}
              >
                <ArticleCard
                  title={article.title}
                  channel={t(article.channel)}
                  writer={article.writer}
                  body={article.body}
                  reply={article.reply}
                  like={article.like}
                  image={article.photo}
                  tooltipTitle="Modifye nouvèl sa"
                  isNews={true}
                />
              </Grid>
            ))}

          <Pagination />
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
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

export default NewsList;
