import type { FC } from "react";
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

const ArticleCard: FC<ArticleCardType> = ({
  key,
  title,
  body,
  channel,
  writer,
  like,
  reply,
  image,
}) => {
  const classes = useArticleCardStyle();
  const { white2, grey } = colors;
  const { h6, size } = typography;

  return (
    <Grid item xs={12} sm={6} md={4} padding={2} key={key}>
      <Card
        sx={{
          maxWidth: 345,
          margin: "auto",
          boxShadow: 0,
          border: `1px solid ${grey["300"]}`,
          cursor: 'pointer',
          "&:hover": {
            boxShadow: 10,
          },
        }}
      >
        <CardMedia sx={{ height: 190 }} image={image} title={title} />
        <Grid className={classes.cardTicket}>
          <Typography
            fontSize={h6}
            color={white2.main}
            mt={-3.3}
            textTransform="uppercase"
            component="div"
            sx={{ paddingLeft: { xs: "2%", sm: 0 } }}
          >
            {channel}
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
              <Typography
                fontSize={size.xs}
                component="p"
                pt={0.5}
                pl={1}
                pr={1}
              >
                {like}
              </Typography>
            </Grid>
            |
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
          <Typography
            gutterBottom
            fontSize={h6}
            textAlign="left"
            component="div"
          >
            {title}
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
            justifyContent: "flex-end",
            alignItems: "flex-start",
            p: 0,
          }}
        >
          <Button
            size="small"
            style={{
              textTransform: "none",
              color: grey["900"],
              fontSize: 12,
              paddingRight: 15,
              marginBottom: 7,
            }}
            onClick={() => alert("I was clicked!")}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
