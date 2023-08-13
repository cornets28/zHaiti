import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../components/Grid/Grid";
import { Typography } from "../../../components/Typography/Typography";
import { ArticleBodyType } from "../../../types/ArticleBodyType";
import typography from "../../../utils/theme/base/typography";

const ArticleBody: FC<ArticleBodyType> = ({ children }) => {
  const { h6 } = typography;
  return (
    <Grid item xs={12} sm={20} md={12} lg={9}>
      <Typography
        fontSize={h6}
        textTransform="capitalize"
        textAlign="left"
        pt={4}
      >
        {children}
      </Typography>
    </Grid>
  );
};

ArticleBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticleBody;
