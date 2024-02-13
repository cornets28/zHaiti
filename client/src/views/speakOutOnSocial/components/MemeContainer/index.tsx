import { FC } from "react";
import PropTypes from "prop-types";
import { Card } from "../../../../components/Card/Card";
import colors from "../../../../utils/theme/base/colors";
import { MemeContainerType } from "../../../../types/MemeContainerType";

const MemeContainer: FC<MemeContainerType> = ({ children }) => {
  const { grey } = colors;

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: 0,
        border: `1px solid ${grey["300"]}`,
        cursor: "pointer",
        position: "relative",
        height: 345,
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      {children}
    </Card>
  );
};

MemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemeContainer;
