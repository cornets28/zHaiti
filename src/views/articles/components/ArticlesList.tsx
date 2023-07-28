import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Title from "../../../components/Title";
import Cow from "../../../images/boys.webp";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import typography from "../../../utils/theme/base/typography";
import MostPopularItem from "../../../components/MostPopularItem/MostPopularItem";

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
    channel: "Politics",
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
    channel: "Education",
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
    channel: "Spiritualism",
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
    channel: "Culture",
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
    channel: "Education",
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
    channel: "SPort",
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
    channel: "Politics",
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
    channel: "Education",
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
    channel: "Spiritualism",
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
    channel: "Culture",
  },
];

const ArticlesList: FC = () => {
  const { white2 } = colors;
  const isWindowSizeMin1513 = useMediaQuery<any>("(min-width:1513px)");
  const isWindowSizeMin1262 = useMediaQuery<any>("(min-width:1262px)");
  const { h6 } = typography;

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
      <Grid container item py={6}>
        <Title
          text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
          title1="Tout"
          title2="Atik yo"
        />
      </Grid>

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
                  channel={article.channel}
                  writer={article.writer}
                  body={article.body}
                  reply={article.reply}
                  like={article.like}
                  image={article.photo}
                />
              </Grid>
            ))}
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={4}
          lg={3}
          sx={{ px: { xs: 3, sm: 4, md: 3 } }}
        >
          <Typography
            fontSize={h6}
            textTransform="uppercase"
            pb={3}
            textAlign="left"
            sx={{ pt: { xs: 6, sm: 6, md: 1 } }}
          >
            Most Popular Articles
          </Typography>

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
      </Grid>
    </Grid>
  );
};

export default ArticlesList;
