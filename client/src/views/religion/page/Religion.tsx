import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import ReligionsList from "../components/ReligionsContainer";

export const Religion: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <ReligionsList />
    </Page>
  );
};

export default Religion;