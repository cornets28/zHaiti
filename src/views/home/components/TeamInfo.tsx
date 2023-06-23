import type { FC } from "react";
import Grid from "@mui/material/Grid";
import { TeamInfoType } from "../../../types/TeamInfoType";
import colors from "../../../utils/theme/base/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import typography from "../../../utils/theme/base/typography";
import circlePlus from "../../../images/circlePlus.png";

export const TeamInfo: FC<TeamInfoType> = ({ photo, alt, fullname, role }) => {
  const { white2 } = colors;
  const { h6, h5 } = typography;
  return (
    <Grid container item xs={12} sm={6} md={4} lg={3} padding={2} margin="auto">
      <Card sx={{ maxWidth: 345 }} className="user__card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={photo}
            alt="green iguana"
          />
          <Grid item className="user__social">
            <Typography fontSize={h5} color={white2.main} component="div">
              {fullname}
            </Typography>
            <Typography
              fontSize={h6}
              color={white2.main}
              component="p"
              textTransform="uppercase"
            >
              {role}
            </Typography>
            <Typography component="div" pt={3}>
              <img src={circlePlus} alt="Cicle Plus" width={40} height={40} />
            </Typography>
          </Grid>

          <CardContent sx={{ height: 160 }}>
            <span className="transition">
              Lucy Copycat <em>CEO & Founder</em>
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TeamInfo;
