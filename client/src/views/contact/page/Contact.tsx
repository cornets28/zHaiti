import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import SocialMedia from "../components/socialMedia";
import { Container } from "../../../components/Container/Container";
import ContactFormAndMessage from "../components/ContactFormAndMessage";

export const Contact: FC = () => {
  const { darkBlue } = colors;
  return (
    <Page pageColor={darkBlue.main}>
      <Container>
        <SocialMedia />
      </Container>
      <ContactFormAndMessage />
    </Page>
  );
};

export default Contact;