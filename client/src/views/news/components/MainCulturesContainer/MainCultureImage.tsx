import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { MainCultureImageType } from "../../../../types/MainCultureImageType";

export const MainCultureImage: FC<MainCultureImageType> = ({
  image,
}) => {
  return (
    <Box
      component="img"
      sx={{
        height: { xs: "30vh", sm: "40vh", md: "45vh", lg: "42.75vh" },
        width: "100%",
        marginTop: 0.5,
      }}
      // @ts-ignore
      alt="Main picture"
      src={image}
    />
  );
};

MainCultureImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default MainCultureImage;
