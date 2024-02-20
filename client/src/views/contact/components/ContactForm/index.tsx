import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { ContactFormType } from "../../../../types/ContactFormType";
import colors from "../../../../utils/theme/base/colors";

const ContactForm: FC<ContactFormType> = ({ children }) => {
    const { grey } = colors;
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      bgcolor={grey["400"]}
      borderRadius={6}
      p={5}
    >
      {children}
    </Grid>
  );
};

ContactForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactForm;
