import { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import colors from "../../../../utils/theme/base/colors";
import PageHeader from "../../../../components/PageHeader";
import { UserInitialType } from "../../../../types/UserInitialType";

const UserInitial: FC<UserInitialType> = ({ children }) => {
  const { grey } = colors;
  const [color, setColor] = useState('');

  const COLORS = [ "#17c1e8", "#66d432", "#ced4da","#e9ecef", "#d75e3d", "#fbcf33","#c70505", "#0391F5", "#081329", "#000000", "#141414", "#38A8F4", "#02C5F6", "#e27933", "#55CDF7", "#97E4F6",  "#d75e3d", "#3177c8",]

  useEffect(() => {
    const randomColorIndex = Math.floor(Math.random() * COLORS.length)
    const randomColor = COLORS[randomColorIndex]
    setColor(randomColor)
  }, [])
  


  return (
    <Box
      sx={{
        width: 39,
        height: 34,
        borderRadius: 30,
        bgcolor: color,
        pt: 0.9,
        mr: 2,
      }}
    >
      <PageHeader fontSize="13px" textAlign={"center"} color={grey[100]}>
        {children}
      </PageHeader>
    </Box>
  );
};

UserInitial.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserInitial;
