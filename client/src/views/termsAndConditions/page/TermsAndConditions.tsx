import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import Container from "@mui/material/Container";
import AllConditions from "../components/AllConditions";

export const TermsAndConditions: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <Container>
        <AllConditions />
      </Container>
    </Page>
  );
};

export default TermsAndConditions;
