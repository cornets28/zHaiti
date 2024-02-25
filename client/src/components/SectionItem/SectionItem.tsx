import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../Grid/Grid";
import { Typography } from "../Typography/Typography";
import typography from "../../utils/theme/base/typography";
import { SectionItemType } from "../../types/SectionItemType";
import ImageListItem from "@mui/material/ImageListItem";
import "./useSectionItemStyle.css";

export const SectionItem: FC<SectionItemType> = ({
  image,
  title,
  body,
  date,
  onClick,
}) => {
  const { h6, size } = typography;

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
      <img
        src={`${image}?w=248&fit=crop&auto=format`}
        srcSet={`${image}?w=248&h=110&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
        height={100}
      />
      <Grid>
        {title && <div className="header">{typographyText(h6, 1, title)}</div>}
        {body && typographyText(size.sm, 1, body.substring(0, 130) + "...")}
        {date && typographyText(size.sm, 1.7, date)}
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
