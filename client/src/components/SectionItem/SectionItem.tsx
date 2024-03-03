import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../Grid/Grid";
import { Typography } from "../Typography/Typography";
import typography from "../../utils/theme/base/typography";
import { SectionItemType } from "../../types/SectionItemType";
import ImageListItem from "@mui/material/ImageListItem";
import "./useSectionItemStyle.css";

import { Box } from "../Box/Box";
import { Card } from "../Card/Card";
import colors from "../../utils/theme/base/colors";
import { useSectionItemStyle } from "./styles/useSectionItemStyle";
import { Divider } from "../Divider/Divider";

export const SectionItem: FC<SectionItemType> = ({
  image,
  title,
  body,
  date, 
  children,
  onClick,
}) => {
  const { h6, size } = typography;
  const { grey } = colors;
  const classes = useSectionItemStyle();

  const typographyText = (fontSize: any, paddingTop: number, text: string) => (
    <Typography
      fontSize={fontSize}
      textTransform="capitalize"
      textAlign="left"
      pt={paddingTop}
    >
      {text}
    </Typography>
  );

  return (
    <ImageListItem key={image} className="card" onClick={onClick}>
      <Card
        sx={{
          maxWidth: 345,
          margin: "auto",
          boxShadow: 0,
          border: `1px solid ${grey["300"]}`,
          cursor: "pointer",
          position: "relative",
          height: 170,
          width: "100%",
          "&:hover": {
            boxShadow: 10,
          },
          background: "red",
        }}
      >
        <img
          src={`${image}?w=248&fit=crop&auto=format`}
          srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={title}
          loading="lazy"
          className={classes.backgroundImage}
        />
      </Card>

      <Grid>
        {title && <div className="header">{typographyText(h6, 1, title)}</div>}
        {body && typographyText(size.sm, 1, body.substring(0, 130) + "...")}

        

        <Box style={{ display: "flex" }} width={"100%"}>
          <Box sx={{ background: "", width: "35%" }}>
            {date && typographyText(size.xxs, 1.7, date)}
          </Box>
          <Box sx={{ width: "70%", textAlign: 'right', pt:1}}>
            {children}
          </Box>
        </Box>
        <Divider />
      </Grid>
    </ImageListItem>
  );
};

SectionItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SectionItem;
