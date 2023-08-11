import { useState, type FC } from "react";
import PropTypes from "prop-types";
import { CategoryType } from "../../../types/CategoryType";
import { EditSvgIdcon } from "../../../images/svg/EditSvgIcon";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import CategoryLink from "./CategoryLink/CategoryLink";
import EditIconContainer from "./EditIconContainer/EditIconContainer";
import CategoryName from "./CategoryName/CategoryName";
import CategoryImage from "./CategoryImage/CategoryImage";

const Category: FC<CategoryType> = ({ channel, image }) => {
  const [show, setShow] = useState(false);

  return (
    <CategoryContainer
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <CategoryImage portrait={image} />
      {show && (
        <CategoryLink url="/channel">
          <EditIconContainer onClick={() => alert("yesss")}>
            <EditSvgIdcon />
          </EditIconContainer>
          <CategoryName category={channel} />
        </CategoryLink>
      )}
    </CategoryContainer>
  );
};

Category.propTypes = {
  channel: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Category;
