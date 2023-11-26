import type { FC } from "react";
import PropTypes from "prop-types";
import { MainNewsType } from "../../../../types/MainNewsType";
import { Grid } from "../../../../components/Grid/Grid";
import { Box } from "../../../../components/Box/Box";

export const MainNews: FC<MainNewsType> = ({ image }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box
        component="img"
        height={26}
        width={26}
        sx={{
          height: { xs: "30vh", sm: "40vh", md: "45vh", lg: "55vh" },
          width: "100%",
          marginTop: 2,
        }}
        // @ts-ignore
        alt="Main picture"
        src={image}
      />
    </Grid>
  );
};

MainNews.propTypes = {
  image: PropTypes.any.isRequired,
};

export default MainNews;
