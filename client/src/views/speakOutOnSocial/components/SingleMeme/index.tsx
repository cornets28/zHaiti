import { type FC } from "react";
import PropTypes from "prop-types";
import { MemeType } from "../../../../types/MemeType";
import MemeContainer from "../MemeContainer";
import MemeImage from "../MemeImage";

const SingleMeme: FC<MemeType> = ({ image }) => {
  return (
    <MemeContainer>
      <MemeImage portrait={image} />
    </MemeContainer>
  );
};

SingleMeme.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SingleMeme;
