import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import colors from "../../../../utils/theme/base/colors";
import { ReplyType } from "../../../../types/ReplyType";

const Reply: FC<ReplyType> = ({ children }) => {
  const { grey } = colors;
  return (
    <Box
      mb={2}
      sx={{
        borderBottom: `1px solid ${grey["300"]}`,
        py: 2,
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
};

Reply.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reply;
