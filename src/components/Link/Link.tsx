import type { FC } from "react";
import PropTypes from 'prop-types';
// import LinkHref from "@mui/material/Link";
import { Link as LinkHref } from '@mui/material';
import typography from "../../utils/theme/base/typography";
import colors from "../../utils/theme/base/colors";
import type { LinkType } from "../../types/LinkType";

const { grey, skyBleu } = colors;
const { h6 } = typography;

export const Link: FC<LinkType> = ({ text }) => (
    <LinkHref
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
    </LinkHref>
);

Link.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Link;
