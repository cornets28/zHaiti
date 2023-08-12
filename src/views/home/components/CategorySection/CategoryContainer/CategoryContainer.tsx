import { FC } from "react";
import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import colors from "../../../../../utils/theme/base/colors";
import {CategoryContainerType} from '../../../../../types/CategoryContainerType';


const CategoryContainer: FC<CategoryContainerType> = ({ children, onMouseOver, onMouseOut }) => {
  const { grey } = colors;

  return (
    <Card
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: 0,
        border: `1px solid ${grey["300"]}`,
        cursor: "pointer",
        position: "relative",
        height: 250,
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      {children}
    </Card>
  );
};

CategoryContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default CategoryContainer;
