import { FC } from "react";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";
import { MoreNewsType } from "../../../types/MoreNewsType";
import Image from "./Image";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Scroll down and write down the ones that do makes sense.",
    author: "Daniel Booster",
    // rows: 2,
    // cols: 2,
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
    // cols: 2,
  },
];

const MoreNews: FC<MoreNewsType> = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      sx={{
        height: { xs: "40vh", sm: "40vh", md: "45vh", lg: "55vh" },
        marginTop: 2,
        paddingLeft: { xs: 0, sm: 0, md: 2, lg: 2 },
      }}
    >
      <ImageList
        sx={{
          width: "100%",
          height: { xs: "40vh", sm: "40vh", md: "45vh", lg: "55vh" },
          mt: 0,
        }}
        gap={8}
      >
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
      </ImageList>
    </Grid>
  );
};

MoreNews.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoreNews;
