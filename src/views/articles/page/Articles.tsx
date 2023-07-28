import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import ArticlesList from "../components/ArticlesList";

export const Articles: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={'hidden'}>
        <ArticlesList />
    </Grid>
  );
};

export default Articles;
