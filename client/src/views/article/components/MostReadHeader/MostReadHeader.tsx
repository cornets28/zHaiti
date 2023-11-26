import type { FC } from "react";
import PropTypes from "prop-types";
import { Typography } from "../../../../components/Typography/Typography";
import { MostReadHeaderType } from "../../../../types/MostReadHeaderType";
import typography from "../../../../utils/theme/base/typography";

export const MostReadHeader: FC<MostReadHeaderType> = ({ children }) => {
    const { h6 } = typography;
  return (
    <Typography
      fontSize={h6}
      textTransform="uppercase"
      pb={3}
      textAlign="left"
      sx={{ pt: { xs: 6, sm: 6, md: 1 } }}
    >
      {children}
    </Typography>
  );
};

MostReadHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MostReadHeader;
