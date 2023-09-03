import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { MainCultureContainerType } from "../../../../types/MainCultureContainerType";
import { Grid } from "../../../../components/Grid/Grid";
import Typography from "@mui/material/Typography";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";

export const MainCultureContainer: FC<MainCultureContainerType> = ({
  title,
  mainImage,
}) => {
  const { h5 } = typography;
  const { black } = colors;

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Typography
        fontSize={h5}
        color={black.main}
        mt={2}
        textTransform="capitalize"
        component="div"
        sx={{ paddingLeft: { xs: "2%", sm: 0 } }}
      >
        {title}
      </Typography>
      <Box
        component="img"
        sx={{
          height: { xs: "30vh", sm: "40vh", md: "45vh", lg: "42.75vh" },
          width: "100%",
          marginTop: 0.5,
        }}
        // @ts-ignore
        alt="Main picture"
        src={mainImage}
      />
    </Grid>
  );
};

MainCultureContainer.propTypes = {
  mainImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainCultureContainer;
