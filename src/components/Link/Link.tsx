import type { FC } from "react";
import PropTypes from 'prop-types';
import Link from "@mui/material/Link";
import typography from "../../utils/theme/base/typography";
import colors from "../../utils/theme/base/colors";
import type { LinkType } from "../../types/LinkType";

const { grey, skyBleu } = colors;
const { h6 } = typography;

const LinkHref: FC<LinkType> = ({ text }) => (
    <Link
      href="#"
      underline="none"
      color={grey["100"]}
      fontSize={h6}
      sx={{
        "&:hover": {
          color: skyBleu['400'],
        },
      }}
    >
      {text}
    </Link>
);

LinkHref.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LinkHref;
