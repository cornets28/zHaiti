import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";

export const DynamicText: FC = () => {
  const { white2, error } = colors;

  return (
    <Grid
      container
      item
      width="100%"
      bgcolor={error.focus}
      sx={{
        textAlign: "center",
        overflow: "hidden",
        height: {xs: 450, sm: 600, md: 700}
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
          sx={{ height: 50, lineHeight: 50, overflow: "hidden", pt: 50 }}
        >
          <ul>
            <li>
              <span>Bay Nouvel San Fos Kote</span>
            </li>
            <li>
              <span>Bay Nouvel Nan Tout Sekte</span>
            </li>
            <li>
              <span>Nan Bon Jan Ti Mamit</span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DynamicText;
