import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import CulturesList from "../components/CulturesContainer";

export const Cultures: FC = () => {
  const { grey } = colors;
  return (
    <Page pageColor={grey[100]}>
      <CulturesList />
    </Page>
  );
};

export default Cultures;
