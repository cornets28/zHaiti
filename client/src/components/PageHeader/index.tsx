import { FC } from "react";
import PropTypes from "prop-types";
import { PageHeaderType } from "../../types/PageHeaderType";
import { Typography } from "../Typography/Typography";

const PageHeader: FC<PageHeaderType> = ({
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

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
