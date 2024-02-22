import type { FC } from "react";
import { Grid } from "../../../../components/Grid/Grid";
import colors from "../../../../utils/theme/base/colors";
import PageHeader from "../../../../components/PageHeader";
import typography from "../../../../utils/theme/base/typography";
import { useTranslation } from "react-i18next";
import StaticLogo from "../../../../components/Logo/StaticLogo";
import { Box } from "../../../../components/Box/Box";
import ContactFormContainer from "../ContactFormContainer";
import MessageContainer from "../MessageContainer";
import ContactForm from "../ContactForm";
import CreateContact from "../CreateContact";

export const ContactFormAndMessage: FC = () => {
  const { error, grey } = colors;
  const { t } = useTranslation();
  const { h2, h5, h6 } = typography;

  const onSubmit = async (data: any) => {
    const formData = [];

    formData.push(data)

    console.log("data:", formData);
  };

  return (
    <ContactFormContainer>
      <MessageContainer>
        <PageHeader fontSize={h2} textAlign="center" color={error.focus}>
          {t("Mesaj")}
        </PageHeader>
        <Grid sx={{mt: {xs: 1, sm: 1, md: 1, lg: -1}, mr: {lg: 5}}}>
          <PageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
            {t(
              "Nou prè pou n tande tout moun kelkeswa nivo w, ras ou, sèks ou, koulè w, oswa pozisyon sosyal ou. Kelkeswa sijè ou vle pataje ak nou an, nou la disponib pou nou diskite sa e si posib, chita pale."
            )}
          </PageHeader>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} mt={7}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <PageHeader fontSize={h5} textAlign="left" color={grey["900"]}>
              {t("Zòrèy nou la pou nou tande w epi nou pa gen okenn prejije ni nou pa pran okenn pozisyon")}
            </PageHeader>
            <Box mt={1} sx={{mb: {xs: 9}}}>
              <PageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
                {t(
                  "Si pou nenpòt rezon an ou ta bezwen fè pase yon mesaj oswa yon anons, si w ta bezwen antre an kontak ak nou pou w diskite sou nenpòt sijè a oswa pale ak ekip devlopman ki te kreye aplikasyon sa, pa ezite ekri nou."
                )}
              </PageHeader>
            </Box>
          </Grid>
        </Grid>
      </MessageContainer>
      <ContactForm>
        <StaticLogo />
        <CreateContact
          fullNamePlaceholder={t("Non konplè")}
          emailAddressPlaceholder={t("Adrès Imèl")}
          messagePlaceholder={t("Ekri mesaj ou a la...")}
          buttonText={t("Voye mesaj")}
          onSubmit={onSubmit}
        />
      </ContactForm>
    </ContactFormContainer>
  );
};

export default ContactFormAndMessage;
