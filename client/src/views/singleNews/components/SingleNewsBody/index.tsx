import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { Typography } from "../../../../components/Typography/Typography";
import { SingleNewsBodyType } from "../../../../types/SingleNewsBodyType";
import typography from "../../../../utils/theme/base/typography";

const SingleNewsBody: FC<SingleNewsBodyType> = ({ children }) => {
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

SingleNewsBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SingleNewsBody;
