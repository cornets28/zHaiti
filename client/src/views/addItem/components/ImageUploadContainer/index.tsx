import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { FC } from "react";
import { ImageUploadContainerType } from "../../../../types/ImageUploadContainerType";

const ImageUploadContainer: FC<ImageUploadContainerType> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      sx={{ pr: { xs: "auto", sm: "auto", md: 1, lg: 1 } }}
    >
      {children}
    </Grid>
  );
};

ImageUploadContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageUploadContainer;
