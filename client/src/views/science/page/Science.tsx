import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";

export const Science: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      Science
    </Page>
  );
};

export default Science;