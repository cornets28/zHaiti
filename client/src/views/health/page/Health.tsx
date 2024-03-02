import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";

export const Health: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      Health
    </Page>
  );
};

export default Health;