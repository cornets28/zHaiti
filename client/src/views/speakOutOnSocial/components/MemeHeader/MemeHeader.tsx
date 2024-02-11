import { FC } from "react";
import { Grid } from "../../../../components/Grid/Grid";
import Container from "@mui/material/Container";

import MemeHeaderContainer from "../MemeHeaderContainer";
import MemeDefaultImage from "../MemeDefaultImage";
import StaticText from "../StaticText";
import MemeButton from "../MemeButton";
import MemePageHeader from "../MemePageHeader";
import { useTranslation } from "react-i18next";

const MemeHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <MemeHeaderContainer>
      <MemePageHeader>{t("Kreye mem pa w la")}</MemePageHeader>
      <Grid container mb={3} mt={2}>
        <MemeDefaultImage />
        <Grid container item xs={12} sm={12} md={12} lg={9}>
          <Container>
            <StaticText>
              {t(
                "Ou kapab kreye mem pa w la ak pwòp mo w, ak pwòp ide w, ak pwòp imaj ou. Lè w fin kreye l, wap kapab telechaje sou gadjèt oswa òdinate wap itilize a. Wap kapab pataje l sou rezo sosyal ou swete a, tankou, Twitter, Facebook, Tiktok, WhatsApp, elatriye."
              )}
            </StaticText>
            <MemeButton onClick={() => alert("hi")}>
              {t("Kreye mem pa w la")}
            </MemeButton>
          </Container>
        </Grid>
      </Grid>
    </MemeHeaderContainer>
  );
};

export default MemeHeader;
