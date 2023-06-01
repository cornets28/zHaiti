import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import LinkHref from "../../Link";
import SimpleGrid from "../../SimpleGrid";

import FooterBox from "./components/FooterBox";
import FooterBottom from "./components/FooterBottom";
import SocialMedia from "./components/SocialMedia";
import TwitterIcon from "../../../images/twitter.png";
import IntagramIcon from "../../../images/instagram.png";
import FacebookIcon from "../../../images/facebook.png";
import WhatsAppIcon from "../../../images/whatsapp.png";

const { darkBleu } = colors;

const Footer: FC = () => {
  return (
    <Grid
      container
      bottom={0}
      sx={{
        zIndex: { lg: -1 },
        position: { md: "relative", lg: "fixed" },
      }}
    >
      <Grid container py={6} px={2} bgcolor={darkBleu.main}>
        <Grid item xs={12} sm={6} md={3} px={1}>
          <FooterBox header="Antrepriz la">
            <SimpleGrid>
              <LinkHref text="Kiyès Nou Ye jrf rfn fj jd as dc dw chcd xdx xdsxaxdsDX CERF REFFER" />
            </SimpleGrid>
            <SocialMedia icon={TwitterIcon} alt="Twitter Icon" href="#" height={40} width={40} />
            <SocialMedia icon={IntagramIcon} alt="Intagram Icon" href="#" height={36} width={36} />
            <SocialMedia icon={FacebookIcon} alt="Facebook Icon" href="#" height={40} width={40} />
            <SocialMedia icon={WhatsAppIcon} alt="WhatsApp Icon" href="#" height={36} width={36} />
          </FooterBox>
        </Grid>

        <Grid item xs={12} sm={6} md={3} px={1}>
          <FooterBox header="Eksplore">
            <SimpleGrid>
              <LinkHref text="Kiyès Nou Ye" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Travay Nou" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Kilti Nou" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Objektif Nou" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Kontak Nou" />
            </SimpleGrid>
          </FooterBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3} px={1}>
          <FooterBox header="Kategori">
            <SimpleGrid>
              <LinkHref text="Kilti" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Espò" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Politik" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Relijyon" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Espirityalite" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Lasyans" />
            </SimpleGrid>
          </FooterBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3} px={1}>
          <FooterBox header="Dwa Nou">
            <SimpleGrid>
              <LinkHref text="Prensip Nou" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Politik Prive N" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Piblik Nou Sible" />
            </SimpleGrid>
            <SimpleGrid>
              <LinkHref text="Kondisyon Ak Sèvis" />
            </SimpleGrid>
          </FooterBox>
        </Grid>
      </Grid>
      <FooterBottom />
    </Grid>
  );
};

export default Footer;
