import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { FC } from "react";
import { AuthorImageType } from "../../../types/AuthorImageType";

const AuthorImage: FC<AuthorImageType> = ({ authorImage, alt }) => {
  return (
    <Box
      component="img"
      height={26}
      width={26}
      sx={{
        height: 52,
        width: 52,
        borderRadius: 50,
        marginRight: 1,
      }}
      alt={alt}
      src={authorImage}
    />
  );
};

AuthorImage.propTypes = {
  alt: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
};

export default AuthorImage;
