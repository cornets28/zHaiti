import { FC } from "react";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { SocialMediaType } from "../../../../types/SocialMediaType";

const SocialMedia: FC<SocialMediaType> = ({
  icon,
  alt,
  href,
  height,
  width,
}) => (
  <Link href={href} target="_blank" underline="none">
    <Box
      component="img"
      height={26}
      width={26}
      sx={{
        height: height,
        width: width,
        marginRight: 1,
        marginTop: 2
      }}
      alt={alt}
      src={icon}
    />
  </Link>
);

SocialMedia.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default SocialMedia;
