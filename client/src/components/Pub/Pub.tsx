import Grid from "@mui/material/Grid";
import { Typography } from "../Typography/Typography";
import typography from "../../utils/theme/base/typography";
import colors from "../../utils/theme/base/colors";
import { useTranslation } from "react-i18next";

const Pub = () => {
  const { t } = useTranslation();
  const { h3 } = typography;
  const { white2, error } = colors;
  return (
    <Grid
      container
      item
      height={300}
      xs={12}
      sm={12}
      md={12}
      lg={12}
      mt={2}
      bgcolor={error.focus}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Typography
          fontSize={h3}
          textTransform="uppercase"
          pb={3}
          textAlign="center"
          color={white2.main}
        >
          {t("PUB")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Pub;
