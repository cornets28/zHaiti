import { FC } from "react";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import { RedirectLinkType } from "../../../../types/RedirectLinkType";
import colors from "../../../../utils/theme/base/colors";

const RedirectLink: FC<RedirectLinkType> = ({ href, category, isLastItem }) => {
  const { skyBleu, error } = colors;

  return (
    <>
      <Link
        href={href}
        fontSize={12}
        sx={{
          textDecoration: "none",
          color: skyBleu[600],
          "&:hover": { color: error.focus },
        }}
      >
        <em> {category}</em>
      </Link>
      {!isLastItem && ","}
    </>
  );
};

RedirectLink.propTypes = {
  category: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default RedirectLink;
