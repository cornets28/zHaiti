import { FC, useState } from "react";
import PropTypes from "prop-types";
import TopLevelNews from "../TopLevelNews/TopLevelNews";
import MainNews from "../MainNews/MainNews";
import MoreNewsContainer from "../MoreNewsContainer/MoreNewsContainer";
import TopLevel from "../TopLevel/TopLevel";
import NewsTime from "../NewsTime/NewsTime";
import Cow from "../../../../images/boys.webp";
import Image from "../../../../components/ImageListItemMui/Image";
import { TopHighLevelNewsType } from "../../../../types/TopHighLevelNewsType";
import AddItemButton from "../../../../components/AddItemButton/AddItemButton";
import AddItem from "../../../addItem";


const TopHighLevelNews: FC<TopHighLevelNewsType> = ({ topLevelNews }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TopLevel>
      <AddItemButton onClick={handleOpen} />
      <AddItem 
       open={open} handleClose={handleClose} 
      />

      <NewsTime>
        {new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </NewsTime>
      {/* TODO:  Add a the item title here*/}
      <TopLevelNews>
        <MainNews image={Cow} />
        <MoreNewsContainer>
          {topLevelNews.length > 0 &&
            topLevelNews
              .slice(0, 4)
              .map((item: any) => (
                <Image
                  image={item.image}
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
  );
};

TopHighLevelNews.propTypes = {
  topLevelNews: PropTypes.array.isRequired,
};

export default TopHighLevelNews;
