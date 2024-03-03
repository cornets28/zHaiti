import { FC } from "react";
import PropTypes from "prop-types";
import { Typography } from "../../components/Typography/Typography";
import { Grid } from "../../components/Grid/Grid";
import typography from "../../utils/theme/base/typography";
import SpanHeader from "../SpanHeader";
import MainItemImage from "./components/MainItemImage";
import MainItemImageContainer from "./components/MainItemImageContainer";
import MainItemHeader from "./components/MainItemHeader";
import { ItemMainInfoType } from "../../types/ItemMainInfoType";
import PageHeader from "../PageHeader";
import colors from "../../utils/theme/base/colors";

const ItemMainInfo: FC<ItemMainInfoType> = ({
  title,
  image,
  imageInfo,
  partialDescription,
  onClick
}) => {
  const { grey, error } = colors;
  const { size } = typography;

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ cursor: "pointer", "&:hover": { color: error.focus } }}
      onClick={onClick}
    >
      <MainItemHeader title={title} />
      <MainItemImageContainer>
        <MainItemImage image={image} />
      </MainItemImageContainer>
      <SpanHeader
        textTransform="capitalize"
        fontSize="11px"
        color={grey[400]}
        textColor={""}
        title={imageInfo}
      />
      <Grid mt={2}>
        <PageHeader fontSize={size.md} textAlign={"left"} color={grey[900]}>
          {partialDescription}...
        </PageHeader>
      </Grid>
    </Grid>
  );
};

ItemMainInfo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageInfo: PropTypes.string.isRequired,
  partialDescription: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemMainInfo;
