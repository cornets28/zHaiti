import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { ContactInfoContainerType } from "../../../../types/ContactInfoContainerType";

export const ContactInfoContainer: FC<ContactInfoContainerType> = ({
  children,
}) => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      {children}
    </Grid>
  );
};

ContactInfoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactInfoContainer;
