import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import EducationList from "../components/PoliticsContainer";

export const Educations: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <EducationList />
    </Page>
  );
};

export default Educations;