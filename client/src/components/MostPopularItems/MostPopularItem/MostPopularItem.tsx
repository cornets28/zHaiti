import { FC } from "react";
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";
import { Typography } from "../../Typography/Typography";
import typography from "../../../utils/theme/base/typography";
import { MostPopularItemType } from "../../../types/MostPopularItemType";
import colors from "../../../utils/theme/base/colors";

const MostPopularItem: FC<MostPopularItemType> = ({ image, title, views, onClick }) => {
  const { size } = typography;
  const { skyBleu, orange } = colors

  return (
    <Grid container item pb={2} onClick={onClick} sx={{cursor: 'pointer'}}>
      <Grid item xs={4} sm={12} md={4} lg={4} sx={{height: {lg: 70, md: 70, sm: 300, xs: 80}}} width={50}>
        <img src={image} alt={title} width={"100%"} height={"100%"} />
      </Grid>
      <Grid item xs={8} sm={10} md={8} lg={8} sx={{ "&:hover": {
          color: skyBleu['600']
        },}}>
        <Typography sx={{fontSize: {xs: size.md, sm: size.lg, md: size.xxs } }} textAlign="left" px={1}>
          {title}
        </Typography>
        <Typography fontSize={size.xxs} textAlign="right" px={1} fontWeight='bold' color={orange.focus}>
         <em> {views} Views</em>
        </Typography>
      </Grid>
    </Grid>
  );
};

MostPopularItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MostPopularItem;
