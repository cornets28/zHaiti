import type { FC } from "react";
import PropTypes from "prop-types";
import { ListItemType } from "../../../../../types/ListItemType";
import { useTranslation } from "react-i18next";

export const ListItem: FC<ListItemType> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <li>
      <span>{t(text)}</span>
    </li>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListItem;
