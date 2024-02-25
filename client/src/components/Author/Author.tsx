import { FC } from "react";
import PropTypes from "prop-types";
import AuthorContainer from "./components/AuthorContainer";
import { AuthorType } from "../../types/AuthorType";
import AuthorImage from "./components/AuthorImage";
import AuthorNameAndProfession from "./components/AuthorNameAndProfession";

const Author: FC<AuthorType> = ({ authorImage, alt, fullName, profession }) => {
  return (
    <AuthorContainer>
      <AuthorImage authorImage={authorImage} alt={alt} />
      <AuthorNameAndProfession fullName={fullName} profession={profession} />
    </AuthorContainer>
  );
};

Author.propTypes = {
  alt: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default Author;
