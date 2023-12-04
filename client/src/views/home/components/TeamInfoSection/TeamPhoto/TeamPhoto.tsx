import type { FC } from "react";
import PropTypes from "prop-types";
import { CardMedia } from "../../../../../components/CardMedia/CardMedia";
import { TeamPhotoType } from "../../../../../types/TeamPhotoType";

export const TeamPhoto: FC<TeamPhotoType> = ({ photo, alt }) => {

  return (
    <CardMedia
    // @ts-ignore
    component="img"
    image={photo}
    alt={alt}
    sx={{ height: { xs: 320, sm: 240 } }}
  />
  );
};

TeamPhoto.propTypes = {
  alt: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default TeamPhoto;
