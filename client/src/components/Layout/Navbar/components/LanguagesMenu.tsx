import { FC } from "react";
import colors from "../../../../utils/theme/base/colors";
import { useTranslation } from "react-i18next";
import menuConfigs from "../../../../utils/menu.configs";
import ScrollToLanguagesMenu from "./ScrollToLanguagesMenu";

const LanguagesMenu: FC = () => {
  const { i18n } = useTranslation();
  const { error, grey, darkBlue } = colors;

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <ScrollToLanguagesMenu
      textColorBefore={grey[100]}
      textColorAfter={grey[100]}
      languagesBgColorBefore={darkBlue.main}
      languagesBgColorAfter={error.main}
      fadeIn={"0.7s ease-in"}
      fadeOut={"0.7s ease-out"}>
      <select 
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        {menuConfigs.languages.map((lang) => (
          <option
            value={lang.short}
          >
            {lang.language}
          </option>
        ))}
      </select>
    </ScrollToLanguagesMenu>
  );
};

export default LanguagesMenu;
