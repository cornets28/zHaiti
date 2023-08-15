import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../components/Grid/Grid";
import { Typography } from "../../../../../components/Typography/Typography";
import SocialMedia from "../../../../../components/Layout/Footer/components/SocialMedia";
import typography from "../../../../../utils/theme/base/typography";
import TwitterIcon from "../../../../../images/twitter.png";
import IntagramIcon from "../../../../../images/instagram.png";
import FacebookIcon from "../../../../../images/facebook.png";
import WhatsAppIcon from "../../../../../images/whatsapp.png";
import { TeamSocialMediaType } from "../../../../../types/TeamSocialMediaType";


export const TeamSocialMedia: FC<TeamSocialMediaType> = ({
  twitterLink,
  intagramLink,
  facebookLink,
  whatsAppLink,
  study,
  university,
}) => {
    const { size } = typography;

  return (
    <>
      <Grid sx={{ marginTop: -2 }}>
        <SocialMedia
          icon={TwitterIcon}
          alt="Twitter Icon"
          href={twitterLink}
          height={30}
          width={30}
        />
        <SocialMedia
          icon={IntagramIcon}
          alt="Intagram Icon"
          href={intagramLink}
          height={30}
          width={30}
        />
        <SocialMedia
          icon={FacebookIcon}
          alt="Facebook Icon"
          href={facebookLink}
          height={30}
          width={30}
        />
        <SocialMedia
          icon={WhatsAppIcon}
          alt="WhatsApp Icon"  
          href={whatsAppLink}
          height={30}
          width={30}
        />
      </Grid>

      <Grid className="transition">
        <Typography fontSize={size.xs}>
          {study} at<em>{university}</em>
        </Typography>
      </Grid>
    </>
  );
};

TeamSocialMedia.propTypes = {
  twitterLink: PropTypes.string.isRequired,
  intagramLink: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  whatsAppLink: PropTypes.string.isRequired,
  study: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
};

export default TeamSocialMedia;
