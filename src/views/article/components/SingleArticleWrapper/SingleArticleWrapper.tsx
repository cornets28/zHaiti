import type { FC } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "../../../../components/Grid/Grid";
import { SingleArticleWrapperType } from "../../../../types/SingleArticleWrapperType";

export const SingleArticleWrapper: FC<SingleArticleWrapperType> = ({
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

SingleArticleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SingleArticleWrapper;
