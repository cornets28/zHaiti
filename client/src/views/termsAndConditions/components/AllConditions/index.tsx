import ConditionsContainer from "../ConditionsContainer";
import { useTranslation } from "react-i18next";
import TermsAndConditionsHeader from "../TermsAndConditionsHeader";
import SubHeaderAndParagraph from "../SubHeaderAndParagraph";

const AllConditions = () => {
  const { t } = useTranslation();
  return (
    <ConditionsContainer>
      <TermsAndConditionsHeader
        header={t("Tèm Ak Kondisyon")}
        latestUpdate={t("Dènye aktyalizasyon")}
        date="August 22, 2022"
      />
      <SubHeaderAndParagraph />
    </ConditionsContainer>
  );
};

export default AllConditions;
