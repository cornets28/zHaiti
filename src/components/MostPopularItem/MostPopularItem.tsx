import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import typography from "../../utils/theme/base/typography";
import { MostPopularItemType } from "../../types/MostPopularItemType";
import colors from "../../utils/theme/base/colors";

const MostPopularItem: FC<MostPopularItemType> = ({ image, title, views, onClick }) => {
  const { size } = typography;
  const { skyBleu, orange } = colors

  return (
    <Grid container item pb={2} onClick={onClick} sx={{cursor: 'pointer'}}>
      <Grid item xs={4} sm={10} md={4} lg={4} height={60} width={50}>
        <img src={image} alt="dsdsdsds" width={"100%"} height={"100%"} />
      </Grid>
      <Grid item xs={8} sm={10} md={8} lg={8} sx={{ "&:hover": {
          color: skyBleu['600']
        },}}>
        <Typography fontSize={size.xxs} textAlign="left" px={1}>
          {title}
        </Typography>
        <Typography fontSize={size.xxs} textAlign="right" px={1} fontWeight='bold' color={orange.focus}>
         <em> {views} Views</em>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MostPopularItem;
