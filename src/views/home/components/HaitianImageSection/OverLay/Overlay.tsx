import { Grid } from "../../../../../components/Grid/Grid";

const Overlay = () => (
  <Grid
    position="absolute"
    top={0}
    left={0}
    width="100%"
    height={"100%"}
    bgcolor="rgba(0, 0, 0, 0.5)"
  />
);

export default Overlay;
