import { FC } from "react";
import PropTypes from "prop-types";
import { MostReadBody } from "../MostReadBody/MostReadBody";
import MostReadHeader from "./MostReadHeader/MostReadHeader";
import MostPopularItem from "./MostPopularItem/MostPopularItem";
import { MostPopularItemsType } from "../../types/MostPopularItemsType";
import { useTranslation } from "react-i18next";

const MostPopularItems: FC<MostPopularItemsType> = ({
  mostPopularArticles,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <MostReadHeader>{t("Atik Ki Pi Popilè Yo")}</MostReadHeader>
      <MostReadBody>
        {mostPopularArticles &&
          mostPopularArticles.map((article: any, index: number) => (
            <MostPopularItem
              image={article.image}
              title={article.title}
              views={article.views}
              onClick={() => alert("Coming soon")}
              key={index}
            />
          ))}
      </MostReadBody>
    </>
  );
};

MostPopularItems.propTypes = {
  mostPopularArticles: PropTypes.array.isRequired,
};

export default MostPopularItems;
