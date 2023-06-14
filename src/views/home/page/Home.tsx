import type { FC } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import colors from '../../../utils/theme/base/colors'

export const Home: FC = () => {
  const { white2, black } = colors;

  return (
    <Grid container spacing={3} bgcolor={white2.main}>
      <Grid item width="100%" height={600} bgcolor={black.focus}>
        cdscmlcdscmsm cdscscs
      </Grid>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
       
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
    </Grid>
  );
};

export default Home;
