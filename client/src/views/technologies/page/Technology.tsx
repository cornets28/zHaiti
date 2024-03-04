import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import TechnologiesList from "../components/TechnologiesContainer";

export const Technology: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <TechnologiesList />
    </Page>
  );
};

export default Technology;