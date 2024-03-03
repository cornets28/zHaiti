import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";

export const Religion: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      Religion
    </Page>
  );
};

export default Religion;