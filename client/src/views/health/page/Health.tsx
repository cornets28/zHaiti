import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import HealthsList from "../components/HealthContainer";

export const Health: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <HealthsList />
    </Page>
  );
};

export default Health;