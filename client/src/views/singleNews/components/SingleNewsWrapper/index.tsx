import type { FC } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "../../../../components/Grid/Grid";
import { SingleNewsWrapperType } from "../../../../types/SingleNewsWrapperType";

export const SingleNewsWrapper: FC<SingleNewsWrapperType> = ({
  children,
}) => {
  const isWindowSizeMin1513 = useMediaQuery<any>("(min-width:1513px)");

  return (
    <Grid
      container
      mb={15}
      mt={10}
      sx={{
        width: {
          sm: "100%",
          md: "100%",
          lg: isWindowSizeMin1513 ? "82%" : "100%",
        },
        mx: "auto",
        px: { sm: 0, md: 4, lg: 5 },
      }}
    >
      {children}
    </Grid>
  );
};

SingleNewsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SingleNewsWrapper;
