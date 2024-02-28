import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import colors from "../../../../utils/theme/base/colors";
import PageHeader from "../../../../components/PageHeader";
import { UserInitialType } from "../../../../types/UserInitialType";

const UserInitial: FC<UserInitialType> = ({ children }) => {
  const { grey } = colors;
  return (
    <Box
      sx={{
        width: 39,
        height: 34,
        borderRadius: 30,
        bgcolor: grey["400"],
        pt: 0.9,
        mr: 2,
      }}
    >
      <PageHeader fontSize="13px" textAlign={"center"} color={grey[900]}>
        {children}
      </PageHeader>
    </Box>
  );
};

UserInitial.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserInitial;
