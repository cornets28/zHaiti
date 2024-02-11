import { FC } from "react";
import PropTypes from "prop-types";
import { MemePageHeaderType } from "../../../../types/MemePageHeaderType";
import colors from "../../../../utils/theme/base/colors";
import { Typography } from "../../../../components/Typography/Typography";
import typography from "../../../../utils/theme/base/typography";


const MemePageHeader: FC<MemePageHeaderType> = ({ children }) => {
  const { error } = colors;
  const { h2 } = typography;
  return (
    <Typography fontSize={h2} textAlign="left" color={error.main}>
    {children}
  </Typography>
  );
};

MemePageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemePageHeader;
