import type { FC } from "react";
import PropTypes from "prop-types";
import { Button } from "../../../../../components/Button/Button";
import { CarouselButtonType } from "../../../../../types/CarouselButtonType";

export const CarouselButton: FC<CarouselButtonType> = ({
  onClick,
  icon,
  marginLeft
}) => {

  return (
    <Button
      onClick={onClick}
      sx={{
        fontSize: 30,
        height: 30,
        marginTop: 10,
        marginLeft: { xs: marginLeft },
      }}
    >
      <i className={icon} aria-hidden="true"></i>
    </Button>
  );
};

CarouselButton.propTypes = {
  onClick: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
  marginLeft: PropTypes.number.isRequired,
};

export default CarouselButton;
