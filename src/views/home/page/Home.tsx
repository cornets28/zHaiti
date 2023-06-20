import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import HaitiBeach from "../../../images/haitibeach.jpeg";
import DynamicText from "../components/DynamicText";

export const Home: FC = () => {
  const { white2, black, error } = colors;

  return (
    <Grid container spacing={3} bgcolor={white2.main}>
      <DynamicText />
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting with
        desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum
      </h1>

      <Grid container item position='relative' width={'100%'} height={700}>
      {/* TODO: turn the line below into MUI syntax */}
        <img className="background-image" src={HaitiBeach} alt="Background" />
        <Grid position='absolute' top={0} left={0} width='100%'height={'100%'} bgcolor='rgba(0, 0, 0, 0.5)'></Grid>
        <Grid className="text-overlay">
          <h1>Welcome to My Website</h1>
          <p>Explore and enjoy the content!</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
