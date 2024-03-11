/* eslint-disable react-hooks/exhaustive-deps */
import { useState, type FC, useEffect } from "react";
import Title from "../../../../components/Title/Title";
import { useTranslation } from "react-i18next";
import Pub from "../../../../components/Pub/Pub";
import ArticlesWrapper from "../../../../components/ArticlesWrapper/ArticlesWrapper";
import LeftSection from "../../../../components/LeftSection/LeftSection";
import RightSection from "../../../../components/RightSection/RightSection";
import db from "../../../../utils/articles.json";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import ItemInfoBox from "../../../../components/ItemInfoBox/ItemInfoBox";
import { Grid } from "../../../../components/Grid/Grid";
import MostPopularItems from "../../../../components/MostPopularItems/MostPopularItems";
import RedirectLink from "../../../../components/SectionItem/components/RedirectLink/RedirectLink";
import redirectLink from "../../../../routes/caseRoutes";
import { useNavigate } from "react-router-dom";
import ItemMainInfo from "../../../../components/ItemMainInfo/ItemMainInfo";
import AddItemButton from "../../../../components/AddItemButton/AddItemButton";
import AddItem from "../../../addItem";

const EducationList: FC = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [temporaryEducationalItems, setTemporaryEducationalItems] = useState(
    []
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const educations = db.articles.filter((article) =>
      article.categories.includes("Edikasyon")
    );
    // @ts-ignore
    setTemporaryEducationalItems(educations);
  }, [db.articles]);

  return (
    <Grid container>
      <ArticlesWrapper>
        <AddItemButton onClick={handleOpen} />
        <AddItem open={open} handleClose={handleClose} />
        <LeftSection>
          <Grid container item py={6} mx={2}>
            <Title
              text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
              title1="Sa k gen nan"
              title2={t("Edikasyon")}
            />
          </Grid>
          <Grid container>
            <ItemMainInfo
              // @ts-ignore
              title={temporaryEducationalItems[0]?.title}
              // @ts-ignore
              image={temporaryEducationalItems[0]?.image}
              // @ts-ignore
              imageInfo={temporaryEducationalItems[0]?.subtitle}
              // @ts-ignore
              partialDescription={temporaryEducationalItems[0]?.description.slice(
                0,
                270
              )}
              onClick={() =>
                navigate(
                  // @ts-ignore
                  `/aktyalite/edikasyon/${temporaryEducationalItems[0]?.id}`
                )
              }
            />
            <ItemInfoBox>
              {temporaryEducationalItems.length > 0 &&
                temporaryEducationalItems.map((item: any) => (
                  <SectionItem
                    image={item.image}
                    title={item.title}
                    body={item.description}
                    date={item.date}
                    key={item.image}
                    onClick={() => navigate(`/aktyalite/edikasyon/${item.id}`)}
                  >
                    {item.categories &&
                      item.categories.length > 0 &&
                      item.categories.map((category: string, index: number) => (
                        <RedirectLink
                          key={category}
                          href={redirectLink(category)}
                          category={category}
                          isLastItem={index === item.categories.length - 1}
                        />
                      ))}
                  </SectionItem>
                ))}
            </ItemInfoBox>
          </Grid>
        </LeftSection>

        <RightSection>
          <Grid mt={10} />
          <MostPopularItems mostPopularArticles={temporaryEducationalItems} />
          <Pub />
        </RightSection>
      </ArticlesWrapper>
    </Grid>
  );
};

export default EducationList;
