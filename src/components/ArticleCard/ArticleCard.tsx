import type { FC } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import colors from "../../utils/theme/base/colors";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import typography from "../../utils/theme/base/typography";
import { useArticleCardStyle } from "./styles/useArticleCardStyle";
import BlancUser from "../../images/blancUser.png";
import GrayHeart from "../../images/grayHeart.png";
import PinkHeart from "../../images/pinkHeart.png";
import OrangeInteraction from "../../images/orangeInteraction.png";
import GrayInteraction from "../../images/grayInteraction.png";
import { ArticleCardType } from "../../types/ArticleCardType";
import Box from "@mui/material/Box";
import { EditSvgIdcon } from "../../images/svg/EditSvgIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import LightTooltip from "../Tooltip/Tooltip";
import { Link } from "react-router-dom";

const ArticleCard: FC<ArticleCardType> = ({
  title,
  body,
  channel,
  writer,
  like,
  reply,
  image,
  tooltipTitle,
  isNews,
  url,
}) => {
  const { t } = useTranslation();
  const classes = useArticleCardStyle();
  const { white2, grey, error } = colors;
  const { h6, size } = typography;
  const isWindowSizeMin1058 = useMediaQuery<any>("(min-width:1018px)");

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: 0,
        border: `1px solid ${grey["300"]}`,
        cursor: "pointer",
        bgcolor: isNews ? grey["200"] : white2.main,
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      <CardMedia sx={{ height: 190 }} image={image} title={title} />

      <Grid
        // @ts-ignore
        className={[
          classes.cardTicket,
          isNews ? classes.badgeColorRed : classes.badgeColorOrange,
        ]}
      >
        <Typography
          fontSize={h6}
          color={white2.main}
          mt={-3.3}
          textTransform="uppercase"
          component="div"
          sx={{ paddingLeft: { xs: "2%", sm: 0 } }}
        >
          {t(channel)}
        </Typography>
      </Grid>

      <Grid display="flex" mx={2} mt={1} justifyContent="space-between">
        <Grid display="flex">
          <img src={BlancUser} alt="blanc user" width={20} height={20} />
          <Typography fontSize={size.xs} component="p" pt={0.5} pl={1}>
            By: <em> {writer}</em>
          </Typography>
        </Grid>

        <Grid display="flex">
          <Grid display="flex">
            <img
              src={like === 0 ? GrayHeart : PinkHeart}
              alt="blanc user"
              width={20}
              height={20}
            />
            <Typography fontSize={size.xs} component="p" pt={0.5} pl={1} pr={1}>
              {like}
            </Typography>
          </Grid>
          <Grid display="flex" pl={1}>
            <img
              src={reply === 0 ? GrayInteraction : OrangeInteraction}
              alt="blanc user"
              width={25}
              height={25}
            />
            <Typography fontSize={size.xs} component="p" pt={0.5} pl={1}>
              {reply}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <CardContent>
        <Typography gutterBottom fontSize={h6} textAlign="left" component="div">
          {title.length > 30
            ? (!isWindowSizeMin1058
                ? title.substring(0, 19)
                : title.substring(0, 30)) + "..."
            : title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="left">
          {body.substring(0, 166)}...
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          pb: 1,
        }}
      >
        <LightTooltip title={t(tooltipTitle)} placement="right-end">
          <Box
            color={error.focus}
            width={20}
            height={20}
            ml={1}
            onClick={() => alert("yesss")}
          >
            <EditSvgIdcon />
          </Box>
        </LightTooltip>

        <Link
          to={url}
          style={{
            textDecoration: "none",
            color: grey["900"],
            textAlign: "right",
            textTransform: "none",
            fontSize: 12,
            paddingRight: 15,
            marginBottom: 7,
          }}
        >
          {t("Plis Detay")}
        </Link>
      </CardActions>
    </Card>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  reply: PropTypes.number.isRequired,
};

export default ArticleCard;
