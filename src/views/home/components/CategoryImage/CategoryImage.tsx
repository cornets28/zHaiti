/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import PropTypes from "prop-types";
import { CategoryImageType } from "../../../../types/CategoryImageType";
import { useCategoryStyle } from "../../styles/useCategoryStyle";

const CategoryImage: FC<CategoryImageType> = ({ portrait }) => {
  const classes = useCategoryStyle();

  return (
    <img
      className={classes.backgroundImage}
      src={portrait}
      alt="Category Image"
    />
  );
};

CategoryImage.propTypes = {
  portrait: PropTypes.string.isRequired,
};

export default CategoryImage;
