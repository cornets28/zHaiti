import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../../../utils/theme/base/colors";

export const ZhaitiText: FC = () => {
  const { white2 } = colors;

  return (
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
  );
};

export default ZhaitiText;
