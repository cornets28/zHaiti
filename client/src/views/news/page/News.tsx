import type { FC } from "react";
import NewsList from "../components/NewsList";
import colors from "../../../utils/theme/base/colors";
import Page from "../../../components/Page/Page";

export const News: FC = () => {
  const { white2 } = colors;

  return (
    <Page pageColor={white2.main}>
      <NewsList />
    </Page>
  );
};

export default News;
