import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { imageListItemClasses } from "@mui/material/ImageListItem";
import { CultureInfoBoxType } from "../../../../types/CultureInfoBoxType";
import { Grid } from "../../../../components/Grid/Grid";

export const CultureInfoBox: FC<CultureInfoBoxType> = ({ children }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box
        sx={{
          marginX: { xs: 3, sm: 3, md: 0, lg: 0 },
          height: "auto",
          display: "grid",
          gridTemplateColumns: {
            sx: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
          gap: 2,
          marginTop: 3,
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

CultureInfoBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CultureInfoBox;
