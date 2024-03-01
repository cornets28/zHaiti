import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { SubHeadAndParaContainerType } from "../../../../types/SubHeadAndParaContainerType";
import PageHeader from "../../../../components/PageHeader";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import { Box } from "../../../../components/Box/Box";

const SubHeadAndParaContainer: FC<SubHeadAndParaContainerType> = ({
  children,
  subHeader,
}) => {
  const { h5 } = typography;
  const { grey } = colors;

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} mt={4}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Box sx={{ mb: 2 }}>
          <PageHeader fontSize={h5} textAlign={"left"} color={grey[900]}>
            {subHeader}
          </PageHeader>
        </Box>

        {children}
      </Grid>
    </Grid>
  );
};

SubHeadAndParaContainer.propTypes = {
  children: PropTypes.node.isRequired,
  subHeader: PropTypes.string.isRequired,
};

export default SubHeadAndParaContainer;
