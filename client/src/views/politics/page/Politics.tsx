import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
// import AllConditions from "../components/AllConditions";

export const Politics: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      Test me out
    </Page>
  );
};

export default Politics;