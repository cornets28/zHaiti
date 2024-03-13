import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { Button } from "../../../../components/Button/Button";
import colors from "../../../../utils/theme/base/colors";
import { SubmitArticleButtonType } from "../../../../types/SubmitArticleButtonType";

const SubmitArticleButton: FC<SubmitArticleButtonType> = ({ text, onClick }) => {
  const { grey } = colors;
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={9}
      mt={3}
      alignSelf={"center"}
    >
      <Button
        variant="contained"
        onClick={onClick}
        sx={{ width: "100%", bgcolor: grey["600"], color: grey["100"] }}
      >
        {text}
      </Button>
    </Grid>
  );
};

SubmitArticleButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitArticleButton;
