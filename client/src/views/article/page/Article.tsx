import { FC } from "react";
import { Grid } from "../../../components/Grid/Grid";
import colors from "../../../utils/theme/base/colors";
import SingleArticle from "../components/SingleArticle";

export const Article: FC = () => {
  const { white2 } = colors;

  return (
    <Grid container bgcolor={white2.main} overflow={"hidden"}>
      <SingleArticle />
    </Grid>
  );
};

Article.propTypes = {};

export default Article;
