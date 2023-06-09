import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import LinkHref from "../../../Link";
import { useTranslation } from "react-i18next";

const { grey, darkBleu } = colors;
const { h6 } = typography;

const FooterBottom: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      borderTop={1}
      borderColor={grey[100]}
      py={3}
      px={2}
      bgcolor={darkBleu.main}
    >
      <Grid item xs={12} sm={2} md={4} />
      <Grid item xs={12} sm={8} md={4} textAlign="center">
        <Typography
          sx={{
            fontSize: h6,
            color: grey["100"],
            justifyItems: "center",
          }}
        >
          © {`${new Date().getFullYear()}`} {t("Tout Dwa Rezève Pou - ZHaiti News")} |{" "}
          <LinkHref text={t("Politik Prive Nou")} />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2} md={4} />
    </Grid>
  );
};

export default FooterBottom;
