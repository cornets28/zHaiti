import { FC } from "react";
import colors from "../../../../utils/theme/base/colors";
import { Typography } from "../../../../components/Typography/Typography";
import typography from "../../../../utils/theme/base/typography";
import { StaticTextType } from "../../../../types/StaticTextType";

const StaticText: FC<StaticTextType> = ({children}) => {
  const { grey } = colors;
  const { h6 } = typography;
  return (
    <Typography fontSize={h6} textAlign="left" mt={3} color={grey["100"]}>
      {children}
    </Typography>
  );
};

export default StaticText;
