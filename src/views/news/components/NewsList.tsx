import type { FC } from "react";
import Cow from "../../../images/boys.webp";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import MostPopularItem from "../../../components/MostPopularItem/MostPopularItem";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import Pagination from "../../../components/Pagination/Pagination";
import MoreNewsContainer from "./MoreNewsContainer/MoreNewsContainer";
import Image from "./Image";
import Page from "../../../components/Page/Page";
import ArticlesWrapper from "../../../components/ArticlesWrapper/ArticlesWrapper";
import NewsTime from "./NewsTime/NewsTime";
import TopLevel from "./TopLevel/TopLevel";
import TopLevelNews from "./TopLevelNews/TopLevelNews";
import MainNews from "./MainNews/MainNews";
import LeftSection from "../../../components/LeftSection/LeftSection";
import ArticlesContainer from "../../articles/components/ArticlesContainer/ArticlesContainer";
import MostReadBody from "../../../components/MostReadBody/MostReadBody";
import RightSection from "../../../components/RightSection/RightSection";
import MostReadHeader from "../../article/components/MostReadHeader/MostReadHeader";

const temporaryArticles = [
  {
    id: 1,
    title: "The Buy By the Sea yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Sam Puffy Bark",
    date: "Jully 5, 2023",
    photo: Cow,
    reply: 4,
    like: 0,
    views: 435,
    channel: "Politik",
  },
  {
    id: 2,
    title: "Bella Chaow Chao yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 12, 2023",
    photo: Cow,
    reply: 0,
    like: 19,
    views: 435,
    channel: "Edikasyon",
  },
  {
    id: 3,
    title: "Soldiers are fitghers yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bob Dun",
    date: "Jan 5, 20203",
    photo: Cow,
    reply: 44,
    like: 23,
    views: 435,
    channel: "Relijyon",
  },
  {
    id: 4,
    title: "Check who wants me tonight in the hood",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bad Bad Girl",
    date: "Dec 5, 2023",
    photo: Cow,
    reply: 0,
    like: 0,
    views: 435,
    channel: "Kilti",
  },

  {
    id: 5,
    title: "Should we ascape death yes for the first time?",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Foolsih Woman",
    date: "Jun 5, 2020",
    photo: Cow,
    reply: 23,
    like: 1,
    views: 435,
    channel: "Edikasyon",
  },
  {
    id: 6,
    title: "The doll in the pool yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 5, 2020",
    photo: Cow,
    reply: 4,
    like: 0,
    views: 435,
    channel: "Espò",
  },
  {
    id: 7,
    title: "What to eat on Wenesday yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Crap BooBoo",
    date: "April 5, 2020",
    photo: Cow,
    reply: 0,
    like: 0,
    views: 435,
    channel: "Politik",
  },

  {
    id: 8,
    title: "Bella Chaow Chaow Chaow yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 12, 2023",
    photo: Cow,
    reply: 0,
    like: 19,
    views: 435,
    channel: "Edikasyon",
  },
  {
    id: 9,
    title: "Soldiers are fitghers yes for the first time",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bob Dun",
    date: "Jan 5, 20203",
    photo: Cow,
    reply: 44,
    like: 23,
    views: 435,
    channel: "Relijyon",
  },
  {
    id: 20,
    title: "Check who wants me tonight in the hood",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bad Bad Girl",
    date: "Dec 5, 2023",
    photo: Cow,
    reply: 0,
    like: 0,
    views: 435,
    channel: "Kilti",
  },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Scroll down and write down the ones that do makes sense.",
    author: "Daniel Booster",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Tweak them a little so they are grammatically correct.",
    author: "Paul Looman",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Research the competition and see what are they up to.",
    author: "Nelly Clown",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Research the competition and see what are they up to.",
    author: "Frenge Ben",
  },
];

const NewsList: FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <ArticlesWrapper>
        <TopLevel>
          <NewsTime>
            {new Date().toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </NewsTime>

          <TopLevelNews>
            <MainNews image={Cow} />
            <MoreNewsContainer>
              {itemData.map((item) => (
                <Image
                  image={item.img}
                  alt={item.title}
                  key={item.img}
                  title={item.title}
                  author={item.author}
                  onClick={() => alert("welllll....")}
                />
              ))}
            </MoreNewsContainer>
          </TopLevelNews>
        </TopLevel>

        <LeftSection>
          {temporaryArticles &&
            temporaryArticles.map((article, index) => (
              <ArticlesContainer key={index}>
                <ArticleCard
                  title={article.title}
                  channel={t(article.channel)}
                  writer={article.writer}
                  body={article.body}
                  reply={article.reply}
                  like={article.like}
                  image={article.photo}
                  tooltipTitle="Modifye nouvèl sa"
                  isNews={true}
                  url={`/atik-yo/${article.id}`}
                />
              </ArticlesContainer>
            ))}

          <Pagination />
        </LeftSection>

        <RightSection>
          <MostReadHeader>{t("Atik Ki Pi Popilè Yo")}</MostReadHeader>
          <MostReadBody>
            {temporaryArticles &&
              temporaryArticles.map((article, index) => (
                <MostPopularItem
                  image={article.photo}
                  title={article.title}
                  views={article.views}
                  onClick={() => alert("Coming soon")}
                  key={index}
                />
              ))}
          </MostReadBody>
          <Pub />
        </RightSection>
      </ArticlesWrapper>
    </Page>
  );
};

export default NewsList;
