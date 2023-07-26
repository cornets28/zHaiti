import { useState, type FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import typography from "../../../utils/theme/base/typography";
import { useCategoryStyle } from "../styles/useCategoryStyle";
import { CategoryType } from "../../../types/CategoryType";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { EditSvgIdcon } from "../../../images/svg/EditSvgIcon";

const Category: FC<CategoryType> = ({ channel, image }) => {
  const [show, setShow] = useState(false);
  const { white2, grey, error } = colors;
  const { h2 } = typography;
  const classes = useCategoryStyle();

  return (
    <Card
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: 0,
        border: `1px solid ${grey["300"]}`,
        cursor: "pointer",
        position: "relative",
        height: 250,
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      <img
        className={classes.backgroundImage}
        src={image}
        alt="Haiti Logo Flag"
      />
      {show && (
        <Grid
          position="absolute"
          top="5%"
          left="5%"
          width="90%"
          height={"90%"}
          bgcolor="#c70505aa"
          component={Link}
          to="/channel"
          sx={{
            textDecoration: "none",
          }}
        >
          <Box
            position={"absolute"}
            color={white2.main}
            width={20}
            height={20}
            right="0"
            mr="10px"
            mt="5px"
            onClick={() => alert("yesss")}
          >
            <EditSvgIdcon />
          </Box>
          <Typography
            fontSize={h2}
            component="p"
            color={white2.main}
            marginY={10}
          >
            {channel}
          </Typography>
        </Grid>
      )}
    </Card>
  );
};

export default Category;
