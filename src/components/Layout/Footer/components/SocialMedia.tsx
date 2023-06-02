import { FC } from "react";
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

export default SocialMedia;
