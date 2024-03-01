import { FC } from "react";
import PropTypes from "prop-types";
import PageHeader from "../../../../components/PageHeader";
import { Box } from "../../../../components/Box/Box";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import { ParagraphType } from "../../../../types/ParagraphType";

const Paragraph: FC<ParagraphType> = ({ children }) => {
  const { h6 } = typography;
  const { grey } = colors;
  return (
    <Box sx={{ mb: 2 }}>
      <PageHeader fontSize={h6} textAlign={"left"} color={grey[900]}>
        {children}
      </PageHeader>
    </Box>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
