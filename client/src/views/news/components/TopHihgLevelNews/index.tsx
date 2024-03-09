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
import AddItem from "../../../../components/AddItem/AddItem";
import AddArticlesModal from "../../../../components/Modal/AddArticlesModal";
import { Grid } from "../../../../components/Grid/Grid";

const TopHighLevelNews: FC<TopHighLevelNewsType> = ({ topLevelNews }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TopLevel>
      <AddItem onClick={handleOpen} />
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

      <AddArticlesModal open={open} handleClose={handleClose}>
        <Grid sx={{ bgcolor: "red", maxHeight: "80vh", overflowY: "scroll", mt: {xs: ''} }}>
          As a Team Lead, ensuring that my team continues to improve is a top
          priority. Here's an example of how I would approach this: Example
          Answer: "To ensure that my team continues to improve, I employ several
          strategies. Firstly, I set clear goals and expectations for the team.
          By defining specific objectives, we have a clear direction to work
          towards. I also break down these goals into smaller, achievable
          milestones, which helps to keep the team motivated and focused.
          Secondly, I believe in regular communication and feedback. I conduct
          weekly check-in meetings with my team members to discuss their
          progress, address any challenges they may be facing, and provide
          constructive feedback. This allows us to identify areas for
          improvement and make necessary adjustments in a timely manner.
          Furthermore, I encourage a culture of continuous learning and
          development within the team. I promote knowledge sharing sessions,
          where team members can share their expertise and learn from one
          another. Additionally, I provide opportunities for training and
          professional development, whether through workshops, online courses,
          or conferences. By investing in their growth, I empower my team
          members to enhance their skills and stay up-to-date with industry
          trends. Lastly, I lead by example. I strive to be a role model for my
          team, demonstrating a strong work ethic, effective communication, and
          a commitment to excellence. By setting a positive example, I inspire
          my team members to push their boundaries and strive for continuous
          improvement. Through these strategies, I have seen tangible results in
          my previous roles. For example, in one instance, I noticed that my
          team's client interactions could be improved. I provided informal
          training sessions and offered tips for more effective client
          interactions. As a result, we saw an increase in client satisfaction
          and improved communication within the team . Overall, by setting clear
          goals, providing regular feedback, fostering a culture of learning,
          and leading by example, I ensure that my team continues to improve and
          deliver exceptional results." Remember, this is just an example
          answer. Feel free to personalize it based on your own experiences and
          approaches to team improvement.
        </Grid>
      </AddArticlesModal>
    </TopLevel>
  );
};

TopHighLevelNews.propTypes = {
  topLevelNews: PropTypes.array.isRequired,
};

export default TopHighLevelNews;
