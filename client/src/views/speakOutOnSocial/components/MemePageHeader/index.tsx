import { FC } from "react";
import PropTypes from "prop-types";
import { MemePageHeaderType } from "../../../../types/MemePageHeaderType";
import { Typography } from "../../../../components/Typography/Typography";

const MemePageHeader: FC<MemePageHeaderType> = ({
  children,
  fontSize,
  textAlign,
  color,
}) => {
  return (
    <Typography fontSize={fontSize} textAlign={textAlign} color={color}>
      {children}
    </Typography>
  );
};

MemePageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemePageHeader;
