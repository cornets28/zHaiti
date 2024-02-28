import { FC } from "react";
import PropTypes from "prop-types";
import PageHeader from "../../../../components/PageHeader";
import { Box } from "../../../../components/Box/Box";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";
import { ReplyDetailsType } from "../../../../types/ReplyDetailsType";

const ReplyDetails: FC<ReplyDetailsType> = ({ fullName, town, text }) => {
  const { size } = typography;
  const { grey } = colors;

  return (
    <>
      <PageHeader fontSize={size.sm} textAlign={"left"} color={grey[900]}>
        <span style={{ fontWeight: "bold" }}>{fullName}</span>
      </PageHeader>
      <PageHeader fontSize={size.xs} textAlign={"left"} color={grey[600]}>
        {town}
        <span style={{ marginLeft: 8, marginRight: 8 }}> | </span> 4h pase
      </PageHeader>
      <Box mt={1}>
        <PageHeader fontSize={size.sm} textAlign={"left"} color={grey[900]}>
          {text}
        </PageHeader>
      </Box>
    </>
  );
};

ReplyDetails.propTypes = {};

export default ReplyDetails;
