import { FC } from "react";
import { Grid } from "../../../../components/Grid/Grid";
import DefaultMeme from "../../../../images/meme.jpeg";

const MemeDefaultImage: FC = () => {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <img src={DefaultMeme} alt="default meme" width={"100%"} height={250} />
    </Grid>
  );
};

export default MemeDefaultImage;
