/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import PropTypes from "prop-types";
import { MemeImageType } from "../../../../types/MemeImageType";
import { useMemeStyle } from "../../styles/useMemeStyle";
import Grid from "@mui/material/Grid/Grid";
import { Box } from "../../../../components/Box/Box";
import MemePageHeader from "../../../../components/PageHeader";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";
import StaticLogo from "../../../../components/Logo/StaticLogo";

const MemeImage: FC<MemeImageType> = ({ portrait }) => {
  const classes = useMemeStyle();
  const { h6 } = typography;
  const { grey } = colors;

  return (
    <Grid>
      <img
        className={classes.backgroundImage}
        src={portrait}
        alt="Meme Image"
      />
      <Box position="absolute" top={2}>
        <StaticLogo />
      </Box>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        bgcolor={"#FDB51C"}
        position="relative"
        textTransform="uppercase"
        bottom={-300}
        zIndex={10}
      >
        <MemePageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
          Ayiti pa pou byento, fok sa chanje!!! Ayiti pa pou byento, fok sa
          chanje!!!
        </MemePageHeader>
      </Grid>
    </Grid>
  );
};

MemeImage.propTypes = {
  portrait: PropTypes.string.isRequired,
};

export default MemeImage;
