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
        <Grid sx={{mt: {xs: 1, sm: 1, md: 1, lg: -4}}}>
          <PageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
            {t(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,"
            )}
          </PageHeader>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} mt={7}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <PageHeader fontSize={h5} textAlign="left" color={grey["900"]}>
              {t("Lorem ipsum dolor sit amet consectetur amet")}
            </PageHeader>
            <Box mt={1} sx={{mb: {xs: 9}}}>
              <PageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
                {t(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,"
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
