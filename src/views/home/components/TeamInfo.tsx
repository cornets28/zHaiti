import type { FC } from "react";
import Grid from "@mui/material/Grid";
import { TeamInfoType } from "../../../types/TeamInfoType";
import colors from "../../../utils/theme/base/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import typography from "../../../utils/theme/base/typography";
import circlePlus from "../../../images/circlePlus.png";
import SocialMedia from "../../../components/Layout/Footer/components/SocialMedia";

import TwitterIcon from "../../../images/twitter.png";
import IntagramIcon from "../../../images/instagram.png";
import FacebookIcon from "../../../images/facebook.png";
import WhatsAppIcon from "../../../images/whatsapp.png";

import { EditSvgIdcon } from "../../../images/svg/EditSvgIcon";

export const TeamInfo: FC<TeamInfoType> = ({
  photo,
  alt,
  fullname,
  role,
  study,
  university,
}) => {
  const { white2, darkBleu, error } = colors;
  const { h6, h5, size } = typography;

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }} className="user__card">
      <CardActionArea>
        <Box
          position={"absolute"}
          color={error.focus}
          width={20}
          height={20}
          right="0"
          mr="5px"
          mt="5px"
          onClick={() => alert("yesss")}
        >
          <EditSvgIdcon />
        </Box>
        <CardMedia
          component="img"
          image={photo}
          alt={alt}
          sx={{ height: { xs: 320, sm: 240 } }}
        />

        <Grid item className="user__social">
          <Typography
            fontSize={h5}
            color={white2.main}
            component="div"
            sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
          >
            {fullname}
          </Typography>
          <Typography
            fontSize={h6}
            color={white2.main}
            component="p"
            textTransform="uppercase"
            sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
          >
            {role}
          </Typography>
          <Typography
            component="div"
            pt={3}
            sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
          >
            <img src={circlePlus} alt="Cicle Plus" width={40} height={40} />
          </Typography>
        </Grid>

        <CardContent sx={{ height: 160, bgcolor: darkBleu.main }}>
          <Box bgcolor={"red"} position={"absolute"} zIndex={5}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Box>
          <Grid sx={{ marginTop: -2 }}>
            <SocialMedia
              icon={TwitterIcon}
              alt="Twitter Icon"
              href="#"
              height={30}
              width={30}
            />
            <SocialMedia
              icon={IntagramIcon}
              alt="Intagram Icon"
              href="#"
              height={30}
              width={30}
            />
            <SocialMedia
              icon={FacebookIcon}
              alt="Facebook Icon"
              href="#"
              height={30}
              width={30}
            />
            <SocialMedia
              icon={WhatsAppIcon}
              alt="WhatsApp Icon"
              href="#"
              height={30}
              width={30}
            />
          </Grid>

          <Grid className="transition">
            <Typography fontSize={size.xs}>
              {study} at<em>{university}</em>
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TeamInfo;
