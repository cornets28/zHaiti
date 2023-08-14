import type { FC } from "react";
import { Grid } from "../../../../components/Grid/Grid";
import HaitiBeach from "../../../../images/haitibeach.jpeg";
import { userHaitiImageStyle } from "../../styles/userHaitiImageStyle";
import { useTranslation } from "react-i18next";
import Overlay from './OverLay/Overlay'

const HaitiImage: FC = () => {
  const { t } = useTranslation();
  const classes = userHaitiImageStyle();
  return (
    <Grid container position="relative" width={"100%"} height={600}>
      <img
        className={classes.backgroundImage}
        src={HaitiBeach}
        alt="Haiti beach"
      />
     <Overlay />
      <Grid className={classes.textOverlay}>
        <h1 className={classes.h1Tag}>{t("Yon Nasyon, Yon Peyi!")}</h1>
        <p>{t("Ayiti Toma, Peyi Twopikal, Kote Ki Plen Koze!")}</p>
      </Grid>
    </Grid>
  );
};

export default HaitiImage;
