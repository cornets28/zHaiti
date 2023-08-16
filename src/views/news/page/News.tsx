import type { FC } from "react";
import { Grid } from "../../../components/Grid/Grid";
import NewsList from "../components/NewsList";
import colors from "../../../utils/theme/base/colors";

export const News: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={"hidden"}>
      <NewsList />
    </Grid>
  );
};

export default News;
