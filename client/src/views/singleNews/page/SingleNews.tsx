import { FC } from "react";
import { Grid } from "../../../components/Grid/Grid";
import colors from "../../../utils/theme/base/colors";
import SingleN from "../components/SingleNews";

export const SingleNews: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={"hidden"}>
      <SingleN />
    </Grid>
  );
};

SingleNews.propTypes = {};

export default SingleN;