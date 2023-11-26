import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { EditSvgIdcon } from "../../../../images/svg/EditSvgIcon";
import { Card } from "../../../../components/Card/Card";
import { CardActionArea } from "../../../../components/CardActionArea/CardActionArea";
import EditIconWrapper from "../../components/TeamInfoSection/EditIconContainer/EditIconWrapper";
import CardMedia from "./TeamPhoto/TeamPhoto";
import { TeamInfoType } from "../../../../types/TeamInfoType";
import TeamInfoDetails from "./TeamInfoDetails/TeamInfoDetails";
import TeamSocialMediaContainer from "./TeamSocialMediaContainer/TeamSocialMediaContainer";
import EditIcon from "./EditIcon/EditIcon";
import TeamSocialMedia from "./TeamSocialMedia/TeamSocialMedia";

export const TeamInfo: FC<TeamInfoType> = ({
  photo,
  alt,
  fullname,
  role,
  study,
  university,
}) => {

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }} className="user__card">
      <CardActionArea>
        <EditIconWrapper>
          <EditSvgIdcon />
        </EditIconWrapper>
        <CardMedia photo={photo} alt={alt} />

        <Grid item className="user__social">
          <TeamInfoDetails fullname={fullname} role={role} />
        </Grid>

        <TeamSocialMediaContainer>
          <EditIcon />
          <TeamSocialMedia 
          twitterLink="#"
          intagramLink="#"
          facebookLink="#"
          whatsAppLink="#"
          study={study}
          university={university}
          />
        </TeamSocialMediaContainer>
      </CardActionArea>
    </Card>
  );
};

TeamInfo.propTypes = {
  alt: PropTypes.string.isRequired,
  photo: PropTypes.any,
  fullname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  study: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
};

export default TeamInfo;
