import type { FC } from "react";
import Grid from "@mui/material/Grid";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
import Title from "../../../components/Title";
import Cow from "../../../images/boys.webp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import typography from "../../../utils/theme/base/typography";
import { useCardTicketStyle } from "../styles/useCardTicketStyle";
import BlancUser from "../../../images/blancUser.png";
import GrayHeart from "../../../images/grayHeart.png";
import PinkHeart from "../../../images/pinkHeart.png";
import OrangeInteraction from "../../../images/orangeInteraction.png";
import GrayInteraction from "../../../images/grayInteraction.png";
import user1 from "../../../images/user1.jpeg";
import user2 from "../../../images/user2.avif";
import user3 from "../../../images/user3.avif";
import user4 from "../../../images/user4.avif";
import user5 from "../../../images/user5.avif";

const temporaryArticles = [
  {
    id: '1',
    title: "The Buy By the Sea",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Sam Puffy Bark",
    date: "Jully 5, 2023",
    photo: user1,
    reply: 4,
    like: 0,
    channel: "Politics",
  },
  {
    id: '2',
    title: "Bella Chaow Chaow Chaow",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 12, 2023",
    photo: user2,
    reply: 0,
    like: 19,
    channel: "Education",
  },
  {
    id: '3',
    title: "Soldiers are fitghers",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bob Dun",
    date: "Jan 5, 20203",
    photo: user3,
    reply: 44,
    like: 23,
    channel: "Spiritualism",
  },
  {
    id: '4',
    title: "Check who wants me tonight in the hood",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bad Bad Girl",
    date: "Dec 5, 2023",
    photo: user4,
    reply: 0,
    like: 0,
    channel: "Culture",
  },
  {
    id: '5',
    title: "Should we ascape death?",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Foolsih Woman",
    date: "Jun 5, 2020",
    photo: user5,
    reply: 23,
    like: 1,
    channel: "Education",
  },
  {
    id: '6',
    title: "The doll in the pool",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 5, 2020",
    photo: user1,
    reply: 4,
    like: 0,
    channel: "SPort",
  },
  {
    id: '7',
    title: "What to eat on Wenesday",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Crap BooBoo",
    date: "April 5, 2020",
    photo: user4,
    reply: 0,
    like: 0,
    channel: "Politics",
  },

];

const LatestArticles: FC = () => {
  const classes = useCardTicketStyle();
  const { white2, grey } = colors;
  const { h6, size } = typography;

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={white2}
      textAlign="center"
    >
      <Container>
        <Grid container item py={6}>
          <Title
            text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
            title1="Denye"
            title2="Atik yo"
          />
        </Grid>

        <Grid container mb={15}>
          {temporaryArticles && temporaryArticles.slice(0, 3).map((article, index) => (
            <Grid item xs={12} sm={6} md={4} padding={2} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                boxShadow: 0,
                border: `1px solid ${grey["300"]}`,
                "&:hover": {
                  boxShadow: 10,
                },
              }}
            >
              <CardMedia
                sx={{ height: 190 }}
                image={Cow}
                title="sas sas"
              />
              <Grid className={classes.cardTicket}>
                <Typography
                  fontSize={h6}
                  color={white2.main}
                  mt={-3.3}
                  textTransform="uppercase"
                  component="div"
                  sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
                >
                  {article.channel}
                </Typography>
              </Grid>

              <Grid display="flex" mx={2} mt={1} justifyContent='space-between'>
                <Grid display="flex">
                  <img
                    src={BlancUser}
                    alt="blanc user"
                    width={20}
                    height={20}
                  />
                  <Typography fontSize={size.xs} component="p" pt={0.5} pl={1}>
                    By: <em>  {article.writer}</em>
                  </Typography>
                </Grid>

                <Grid display="flex">
                  <Grid display="flex">
                    <img
                      src={article.reply === 0 ? GrayHeart : PinkHeart}
                      alt="blanc user"
                      width={20}
                      height={20}
                    />
                    <Typography fontSize={size.xs} component="p" pt={0.5} pl={1} pr={1}>
                    {article.like}
                    </Typography>
                  </Grid>
                  |
                  <Grid display="flex" pl={1}>
                    
                    <img
                      src={article.reply === 0 ? GrayInteraction : OrangeInteraction}
                      alt="blanc user"
                      width={25}
                      height={25}
                    />
                    <Typography fontSize={size.xs} component="p" pt={0.5} pl={1}>
                    {article.reply }
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
                    {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="left"
                >
                   {article.body.substring(0, 166)}...
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

          ))}
          
        </Grid>
      </Container>
    </Grid>
  );
};

export default LatestArticles;
