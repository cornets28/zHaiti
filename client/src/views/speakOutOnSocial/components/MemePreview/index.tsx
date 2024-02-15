import { FC } from "react";
import PropTypes from "prop-types";
import { Card } from "../../../../components/Card/Card";
import colors from "../../../../utils/theme/base/colors";
import { MemePreviewType } from "../../../../types/MemePreviewType";
import Grid from "@mui/material/Grid/Grid";
// import ScrareImage from "../../../../images/scrareImage.png";

const MemePreview: FC<MemePreviewType> = ({
  backgroundImage,
  memeText,
  dynamicMemeImage,
}) => {
  const { grey } = colors;

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      <div style={{ position: "relative" }}>
        <Grid container spacing={2}>
          <Card
            sx={{
              border: `1px solid ${grey["300"]}`,
              boxShadow: 10,
            }}
          >
            <img
              src={backgroundImage}
              width={"100%"}
              height={"100%"}
              alt="Meme background"
            />
          </Card>
        </Grid>
        {dynamicMemeImage !== undefined && dynamicMemeImage !== "" ? (
          <div
            style={{
              position: "absolute",
              top: "2.3%",
              left: "13%",
              zIndex: 1,
              width: "70%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img
                  src={dynamicMemeImage}
                  width={"100%"}
                  height={"100%"}
                  alt="Dynamic Meme"
                />
              </Grid>
            </Grid>
          </div>
        ) : null}
      </div>

      <h2 className="meme-text">{memeText}</h2>
    </Grid>
  );
};

MemePreview.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  memeText: PropTypes.string.isRequired,
};

export default MemePreview;
