import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import ContactContainer from "../ContactContainer";
import PageHeaderContainer from "../../../../components/PageHeaderContainer";
import PageHeader from "../../../../components/PageHeader";
import typography from "../../../../utils/theme/base/typography";
import PageHeaderWrapper from "../PageHeaderWrapper";
import ContactInfoContainer from "../contactInfoContainer";
import ContactColumn from "../ContactColumn";
import { useTranslation } from "react-i18next";
import { Box } from "../../../../components/Box/Box";
import address from "../../../../images/address.png";
import phone from "../../../../images/phone.png";
import email from "../../../../images/email.png";

const SocialMedia: FC = () => {
  const { error, grey } = colors;
  const { t } = useTranslation();
  const { h2, h5, h6 } = typography;


  return (
    <ContactContainer>
      <PageHeaderWrapper>
        <PageHeaderContainer>
          <PageHeader fontSize={h2} textAlign="center" color={error.main}>
            {t("Antre An Kontak Ak Nou")}
          </PageHeader>
        </PageHeaderContainer>

        <ContactInfoContainer>
          <ContactColumn icon={address} alt='address'>
            <Box mb={3}>
              <PageHeader fontSize={h5} textAlign="center" color={grey["100"]}>
                <span>{t("Adrès")}</span>
              </PageHeader>
            </Box>
            <PageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
              {t("Petion-ville, Haiti")}
            </PageHeader>
            <PageHeader fontSize={h6} textAlign="center" color={grey["400"]}>
              {t("#33, Rue Faubert")}
            </PageHeader>
            <Grid mb={3} />
            <PageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
              {t("Petion-ville, Haiti")}
            </PageHeader>
            <PageHeader fontSize={h6} textAlign="center" color={grey["400"]}>
              {t("#33, Rue Faubert")}
            </PageHeader>
          </ContactColumn>

          <ContactColumn icon={phone} alt='phone'>
            <Box mb={3}>
              <PageHeader fontSize={h5} textAlign="center" color={grey["100"]}>
                {t("Telefòn")}
              </PageHeader>
            </Box>

            <PageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
              {t("Petion-ville, Haiti")}
            </PageHeader>
            <PageHeader fontSize={h6} textAlign="center" color={grey["400"]}>
              {t("#33, Rue Faubert")}
            </PageHeader>
            <Grid mb={3} />
            <PageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
              {t("Petion-ville, Haiti")}
            </PageHeader>
            <PageHeader fontSize={h6} textAlign="center" color={grey["400"]}>
              {t("#33, Rue Faubert")}
            </PageHeader>
          </ContactColumn>

          <ContactColumn icon={email} alt='email'>
            <Box mb={3}>
              <PageHeader fontSize={h5} textAlign="center" color={grey["100"]}>
              <span>{t("Imèl")}</span>
              </PageHeader>
            </Box>

            <PageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
              {t("Petion-ville, Haiti")}
            </PageHeader>
            <PageHeader fontSize={h6} textAlign="center" color={grey["400"]}>
              {t("#33, Rue Faubert")}
            </PageHeader>
            <Grid mb={3} />
            <PageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
              {t("Petion-ville, Haiti")}
            </PageHeader>
            <PageHeader fontSize={h6} textAlign="center" color={grey["400"]}>
              {t("#33, Rue Faubert")}
            </PageHeader>
          </ContactColumn>
        </ContactInfoContainer>
      </PageHeaderWrapper>
    </ContactContainer>
  );
};

export default SocialMedia;
