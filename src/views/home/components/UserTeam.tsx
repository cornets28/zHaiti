import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";

import Title from "../../../components/Title";

export const UserTeam: FC = () => {
  const { white2 } = colors;

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={white2}
      textAlign="center"
    >
      <Container>
        <Grid container item py={6}>
          <Title
            text="We create events aiming to pear to the voice for children and gather for support.
Please update with our events and confirm you presence."
            title1="Objektif"
            title2="Nou An"
          />
        </Grid>

        <UserTeam />
      </Container>
    </Grid>
  );
};

export default UserTeam;
