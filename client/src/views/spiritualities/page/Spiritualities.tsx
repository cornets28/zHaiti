import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import SpiritualitiesContainer from "../components/SpiritualitiesContainer";

export const Spiritualities: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <SpiritualitiesContainer />
    </Page>
  );
};

export default Spiritualities;