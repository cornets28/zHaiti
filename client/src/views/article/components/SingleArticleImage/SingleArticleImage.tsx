import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { SingleArticleImageType } from "../../../../types/SingleArticleImageType";

const SingleArticleImage: FC<SingleArticleImageType> = ({ image }) => {
  return (
    <Box
      component="img"
      height={26}
      width={26}
      sx={{
        height: { xs: "40vh", sm: "40vh", md: "45vh", lg: "55vh" },
        width: "100%",
        marginTop: 2,
      }}
      // @ts-ignore
      alt="Main picture"
      src={image}
    />
  );
};

SingleArticleImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SingleArticleImage;
