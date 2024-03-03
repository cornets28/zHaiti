import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import ScienceList from "../components/ScienceContainer";

export const Science: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <ScienceList />
    </Page>
  );
};

export default Science;
