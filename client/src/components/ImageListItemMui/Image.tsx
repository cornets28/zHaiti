import { FC } from "react";
import PropTypes from "prop-types";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import { ImageType } from "../../types/ImageType";
import colors from "../../utils/theme/base/colors";

const Image: FC<ImageType> = ({ image, alt, title, author, marginTop, marginRight, marginLeft, onClick }) => {
  const { white2 } = colors;

  return (
    <ImageListItem sx={{ cursor: "pointer", marginTop : marginTop, marginRight: marginRight, marginLeft: marginLeft}}>
      <img
        src={`${image}?w=248&fit=crop&auto=format`}
        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={alt}
        loading="lazy"
        onClick={onClick}
      />
      |
      <ImageListItemBar
        title={title}
        subtitle={author}
        actionIcon={
          <IconButton
            sx={{ color: white2.main }}
            aria-label={`info about ${title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Image;
