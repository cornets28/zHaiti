import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import { MustKnowHaitiansType } from "../../../../types/MustKnowHaitiansType";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { MainHaitian } from "./MainHaitian";
import { RecentMainHaitians } from "./RecentMainHaitians";
import Cow from "../../../../images/boys.webp";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import Typography from "@mui/material/Typography";
import typography from "../../../../utils/theme/base/typography";
import ImageList from "@mui/material/ImageList";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Image from "../../../../components/ImageListItemMui/Image";

const temporaryArticles = [
  {
    id: 1,
    title:
      "The Buy By the Sea yes for the first time The Buy By the Sea yes for",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Sam Puffy Bark",
    date: "Jully 5, 2023",
    photo: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
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
    photo: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
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
    photo: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
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
    photo: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
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
    photo: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
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
    photo: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
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
    photo: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
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
    photo: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    reply: 44,
    like: 23,
    views: 435,
    channel: "Relijyon",
  },
];

export const MustKnowHaitians: FC<MustKnowHaitiansType> = ({
  header,
  children,
}) => {
  const { error } = colors;
  const { h5 } = typography;
  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
      {temporaryArticles && (
        <MainHaitian
          mainImage={temporaryArticles[0].photo}
          title={temporaryArticles[0].title}
        />
      )}
      <RecentMainHaitians>
        <Grid item xs={12} sm={12} md={12} lg={11.5}>
          <ImageList sx={{ width: "100%", height: { md: "64.5vh" , lg: "47.5vh" }}}>
            {temporaryArticles.slice(0, 4).map((item) => (
              <Image
                image={item.photo}
                alt={item.title}
                key={item.photo}
                title={item.title}
                author={item.writer}
                onClick={() => alert("welllll....44")}
              />
            ))}
          </ImageList>
        </Grid>
      </RecentMainHaitians>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            marginX: { xs: 3, sm: 3, md: 0, lg: 0 },
            height: "auto",
            display: "grid",
            gridTemplateColumns: {
              sx: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            [`& .${imageListItemClasses.root}`]: {
              display: "flex",
              flexDirection: "column",
            },
            gap: 2,
            marginTop: 3,
          }}
        >
          {temporaryArticles.length > 0 &&
            temporaryArticles
              .slice(4, 8)
              .map((item) => (
                <SectionItem
                  image={item.photo}
                  title={item.title}
                  body={item.body}
                  date={item.date}
                  key={item.photo}
                  onClick={() => alert("TBD")}
                />
              ))}
        </Box>
      </Grid>
    </Grid>
  );
};

MustKnowHaitians.propTypes = {
  header: PropTypes.string.isRequired,
  // children: PropTypes.node.isRequired,
};

export default MustKnowHaitians;
