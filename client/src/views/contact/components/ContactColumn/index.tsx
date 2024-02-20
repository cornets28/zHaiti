import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { ContactColumnType } from "../../../../types/ContactColumnType";
import { Box } from "../../../../components/Box/Box";

export const ContactColumn: FC<ContactColumnType> = ({ children }) => {
  const { error, grey } = colors;

  return (
    <Grid item xs={12} sm={6} md={3} lg={4} py={8}>
      <Box
        color={grey["100"]}
        width={70}
        height={70}
        m={"auto"}
        borderRadius={50}
        mb={1}
        bgcolor={error.main}
      ></Box>
      {children}
    </Grid>
  );
};

ContactColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactColumn;
