import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import { useTranslation } from 'react-i18next';

export const DynamicText: FC = () => {
  const { t } = useTranslation()
  const { white2, error } = colors;

  return (
    <Grid
      container
      item
      width="100%"
      bgcolor={error.focus}
      overflow='hidden'
      sx={{
        textAlign: "center",
        overflow: "hidden",
        height: {xs: 300, sm: 500, md: 600}
      }}
    >
      <Grid item className="wrapper">
        <Grid
          item
          sx={{
            color: white2.main,
            fontWeight: 400,
            fontSize: { xs: 30, sm: 45, md: 60 },
          }}
        >
          ZHaiti News
        </Grid>
        <Grid
          item
          xs={12}
          className="dynamic-texts"
          sx={{ height: 50, lineHeight: 50, overflow: "hidden", pt: 50, marginX: 'auto' }}
        >
          <ul>
            <li>
              <span>{t("Bay Nouvèl San Fòs Kote")}</span>
            </li>
            <li>
              <span>{t("Bay Nouvèl Nan Tout Sektè")}</span>
            </li>
            <li>
              <span>{t("Bay Nouvèl Nan Bon Jan Ti Mamit")}</span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DynamicText;
