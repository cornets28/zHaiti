import type { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../../components/Box/Box";
import { TeamImageType } from "../../../../../types/TeamImageType";
import colors from "../../../../../utils/theme/base/colors";


export const TeamImage: FC<TeamImageType> = ({ image, alt }) => {
  const { grey } = colors;

  return (
    <Box
      component="img"
      bgcolor={grey["300"]}
      alignItems="center"
      marginBottom={10}
      sx={{
        height: 153,
        width: 153,
        borderRadius: 50,
      }}
      // @ts-ignore
      src={image}
      alt={`${alt}` + " image"}
    />
  );
};

TeamImage.propTypes = {
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TeamImage;
