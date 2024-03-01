import { FC } from "react";
import PropTypes from "prop-types";
import PageHeaderContainer from "../../../../components/PageHeaderContainer";
import PageHeader from "../../../../components/PageHeader";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";
import { TermsAndConditionsHeaderType } from "../../../../types/TermsAndConditionsHeaderType";

const TermsAndConditionsHeader: FC<TermsAndConditionsHeaderType> = ({
  header,
  date,
  latestUpdate
}) => {
  const { h2, size } = typography;
  const { grey } = colors;
  return (
    <PageHeaderContainer>
      <PageHeader fontSize={h2} textAlign={"center"} color={grey[900]}>
        <span style={{ fontWeight: "bold" }}>{header}</span>
      </PageHeader>
      <PageHeader fontSize={size.sm} textAlign={"center"} color={grey[500]}>
        <span style={{ fontWeight: "bold" }}>{latestUpdate}: {date}</span>
      </PageHeader>
    </PageHeaderContainer>
  );
};

TermsAndConditionsHeader.propTypes = {
  header: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  latestUpdate: PropTypes.string.isRequired,
};

export default TermsAndConditionsHeader;
