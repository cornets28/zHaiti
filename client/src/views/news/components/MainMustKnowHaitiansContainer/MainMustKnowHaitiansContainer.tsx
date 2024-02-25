import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { MainMustKnowHaitiansContainerType } from "../../../../types/MainMustKnowHaitiansContainerType";
import { Grid } from "../../../../components/Grid/Grid";
import { Typography } from "../../../../components/Typography/Typography";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";

export const MainMustKnowHaitiansContainer: FC<
  MainMustKnowHaitiansContainerType
> = ({ title1, title2, mainImage1, mainImage2, onClick1, onClick2 }) => {
  const { h5 } = typography;
  const { black } = colors;

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={12} lg={6} sx={{ pr: { md: 0, lg: 1 } }}>
        <Typography
          fontSize={h5}
          color={black.main}
          mt={2}
          textTransform="capitalize"
          component="div"
          sx={{ paddingLeft: { xs: "2%", sm: 3 } }}
        >
          {title1}
        </Typography>
        <Box
          component="img"
          sx={{
            height: { xs: "30vh", sm: "45vh", md: "45vh", lg: "42.75vh" },
            width: "100%",
            marginTop: 0.5,
            paddingX: { xs: 3, sm: 3, md: 0, lg: 0 },
            cursor: "pointer",
          }}
          onClick={onClick1}
          // @ts-ignore
          alt="Main picture"
          src={mainImage1}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} sx={{ pl: { md: 0, lg: 1 } }}>
        <Typography
          fontSize={h5}
          color={black.main}
          mt={2}
          textTransform="capitalize"
          component="div"
          sx={{ paddingLeft: { xs: "2%", sm: 3 } }}
        >
          {title2}
        </Typography>
        <Box
          component="img"
          sx={{
            height: { xs: "30vh", sm: "45vh", md: "45vh", lg: "42.75vh" },
            width: "100%",
            marginTop: 0.5,
            paddingX: { xs: 3, sm: 3, md: 0, lg: 0 },
            cursor: "pointer",
          }}
          onClick={onClick2}
          // @ts-ignore
          alt="Main picture"
          src={mainImage2}
        />
      </Grid>
    </Grid>
  );
};

MainMustKnowHaitiansContainer.propTypes = {
  mainImage1: PropTypes.any.isRequired,
  mainImage2: PropTypes.any.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default MainMustKnowHaitiansContainer;
