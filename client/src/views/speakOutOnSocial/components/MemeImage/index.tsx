/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import PropTypes from "prop-types";
import { MemeImageType } from "../../../../types/MemeImageType";
import { useMemeStyle } from "../../styles/useMemeStyle";

const MemeImage: FC<MemeImageType> = ({ portrait }) => {
  const classes = useMemeStyle();

  return (
    <img
      className={classes.backgroundImage}
      src={portrait}
      alt="Meme Image"
    />
  );
};

MemeImage.propTypes = {
  portrait: PropTypes.string.isRequired,
};

export default MemeImage;
