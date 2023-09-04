import { FC } from "react";
import PropTypes from "prop-types";
import { MainCultureContainerType } from "../../../../types/MainCultureContainerType";
import { Grid } from "../../../../components/Grid/Grid";
import { MainCultureTitle } from "./MainCultureTitle";
import MainCultureImage from "./MainCultureImage";

export const MainCultureContainer: FC<MainCultureContainerType> = ({
  title,
  mainImage,
}) => {

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <MainCultureTitle>
        {title}
      </MainCultureTitle>
      <MainCultureImage image={mainImage} />
    </Grid>
  );
};

MainCultureContainer.propTypes = {
  mainImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainCultureContainer;
