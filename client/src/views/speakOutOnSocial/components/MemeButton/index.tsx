import { FC } from "react";
import { Button } from "../../../../components/Button/Button";
import { Grid } from "../../../../components/Grid/Grid";
import { MemeButtonType } from "../../../../types/MemeButtonType";

const MemeButton: FC<MemeButtonType> = ({ children }) => {
  return (
    <Grid container mb={3} mt={5}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ lineHeight: 3, px: 4, fontWeight: "bold" }}
      >
        {children}
      </Button>
    </Grid>
  );
};

export default MemeButton;
