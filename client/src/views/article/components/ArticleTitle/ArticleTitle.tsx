import { FC } from "react";
import PropTypes from "prop-types";
import { Typography } from "../../../../components/Typography/Typography";
import { Grid } from "../../../../components/Grid/Grid";
import { ArticleTitleType } from "../../../../types/ArticleTitleType";
import typography from "../../../../utils/theme/base/typography";

const ArticleTitle: FC<ArticleTitleType> = ({ title }) => {
  const { h3 } = typography;
  return (
    <Grid item xs={12} sm={12} md={18} lg={12}>
      <Typography fontSize={h3} textTransform="capitalize" textAlign="center">
        {title}
      </Typography>
    </Grid>
  );
};

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ArticleTitle;
