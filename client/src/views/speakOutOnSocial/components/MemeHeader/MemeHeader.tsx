import { FC } from "react";
import { Grid } from "../../../../components/Grid/Grid";
import Container from "@mui/material/Container";

import MemeHeaderContainer from "../MemeHeaderContainer";
import MemeDefaultImage from "../MemeDefaultImage";
import StaticText from "../StaticText";
import MemeButton from "../MemeButton";
import MemePageHeader from "../MemePageHeader";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";
import { useTranslation } from "react-i18next";

const MemeHeader: FC = () => {
  const { t } = useTranslation();
  const { h2 } = typography;
  const { error, grey } = colors;
  return (
    <MemeHeaderContainer>
      <MemePageHeader fontSize={h2} textAlign="left" color={error.main}>
        {t("Kreye mem pa w la")}
      </MemePageHeader>
      <Grid container mb={3} mt={2}>
        <MemeDefaultImage />
        <Grid container item xs={12} sm={9} md={9} lg={9}>
          <Container>
            <StaticText>
              {t(
                "Ou kapab kreye mem pa w la ak pwòp mo w, ak pwòp ide w, ak pwòp imaj ou. Lè w fin kreye l, wap kapab telechaje sou gadjèt oswa òdinate wap itilize a. Wap kapab pataje l sou rezo sosyal ou swete a, tankou, Twitter, Facebook, Tiktok, WhatsApp, elatriye."
              )}
            </StaticText>
            <MemeButton>
              <a href="#create-meme" style={{ color: grey["100"] }}>
                {t("Kreye mem pa w la")}
              </a>
            </MemeButton>
          </Container>
        </Grid>
      </Grid>
    </MemeHeaderContainer>
  );
};

export default MemeHeader;
