import { FC } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import colors from "../../../../../utils/theme/base/colors";
import typography from "../../../../../utils/theme/base/typography";
import { CategoryNameType } from "../../../../../types/CategoryNameType";

const CategoryName: FC<CategoryNameType> = ({ category }) => {
  const { white2 } = colors;
  const { h2 } = typography;

  return (
    <Typography fontSize={h2} component="p" color={white2.main} marginY={10}>
      {category}
    </Typography>
  );
};

CategoryName.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryName;
