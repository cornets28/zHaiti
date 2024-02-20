import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import colors from "../../../../utils/theme/base/colors";
import { Container } from "../../../../components/Container/Container";
import { ContactFormContainerType } from "../../../../types/ContactFormContainerType";

export const ContactFormContainer: FC<ContactFormContainerType> = ({children}) => {
  const { grey } = colors;

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} bgcolor={grey["100"]}>
      <Container>
        <Grid container item xs={12} sm={12} md={12} lg={12} my={12}>
           {children}
        </Grid>
      </Container>
    </Grid>
  );
};

ContactFormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactFormContainer;
