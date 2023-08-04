import { FC } from "react";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import Grid from "@mui/material/Grid";
import { MoreNewsContainerType } from "../../../types/MoreNewsContainerType";

const MoreNewsContainer: FC<MoreNewsContainerType> = ({ children }) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      sx={{
        height: { xs: "40vh", sm: "40vh", md: "45vh", lg: "55vh" },
        marginTop: 2,
        paddingLeft: { xs: 0, sm: 0, md: 2, lg: 2 },
      }}
    >
      <ImageList
        sx={{
          width: "100%",
          height: { xs: "40vh", sm: "40vh", md: "45vh", lg: "55vh" },
          mt: 0,
        }}
        gap={8}
      >
        {children}
      </ImageList>
    </Grid>
  );
};

MoreNewsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoreNewsContainer;
