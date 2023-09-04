import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { Divider } from "../../../../components/Divider/Divider";
import { Typography } from "../../../../components/Typography/Typography";
import typography from "../../../../utils/theme/base/typography";
import { ThickDividerType } from "../../../../types/ThickDividerType";

export const ThickDivider: FC<ThickDividerType> = ({header, color}) => {
  const { h4 } = typography;

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{paddingX: { xs: 3, sm: 3, md: 0, lg: 0 },}}>
        <Typography
          fontSize={h4}
          textTransform="capitalize"
          textAlign="left"
          pt={4}
        >
          {header}
          <span>
            <Divider color={color} flexItem sx={{ height: 2 }} />
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

ThickDivider.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ThickDivider;
