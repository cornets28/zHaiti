import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";

export const Educations: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      Educations
    </Page>
  );
};

export default Educations;