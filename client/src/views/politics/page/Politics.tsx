import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import PoliticsList from "../compoents/PoliticsContainer";

export const Politics: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <PoliticsList />
    </Page>
  );
};

export default Politics;
