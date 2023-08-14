import { FC } from "react";
import PropTypes from "prop-types";
import { Typography } from "../../../components/Typography/Typography";
import { PublishedDateType } from "../../../types/PublishedDateType";
import typography from "../../../utils/theme/base/typography";
import colors from "../../../utils/theme/base/colors";

const PublishedDate: FC<PublishedDateType> = ({ date }) => {
  const { grey } = colors;
  const { h6 } = typography;
  return (
    <Typography
      fontSize={h6}
      textTransform="uppercase"
      textAlign="right"
      pt={4}
      color={grey["500"]}
    >
      {date}
    </Typography>
  );
};

PublishedDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PublishedDate;
