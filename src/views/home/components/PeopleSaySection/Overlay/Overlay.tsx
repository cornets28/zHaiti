import type { FC } from "react";
import { Grid } from "../../../../../components/Grid/Grid";

export const Overlay: FC = () => {
  return (
    <Grid
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height={"100%"}
      bgcolor="#081329da"
    />
  );
};

export default Overlay;
