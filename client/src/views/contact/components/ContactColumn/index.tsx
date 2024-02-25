import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { ContactColumnType } from "../../../../types/ContactColumnType";
import { Box } from "@mui/material";

export const ContactColumn: FC<ContactColumnType> = ({ children, alt, icon }) => {
  const { error, grey } = colors;

  return (
    <Grid item xs={12} sm={6} md={3} lg={4} py={15}>
      <Box
        component="img"
        color={grey["100"]}
        width={70}
        height={70}
        borderRadius={50}
        bgcolor={error.main}
        alt={alt}
        src={icon}
        p={2}
      />
      <Grid item xs={12} sm={12} md={12} lg={12} mt={1}>
        {children}
      </Grid>
    </Grid>
  );
};

ContactColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactColumn;
