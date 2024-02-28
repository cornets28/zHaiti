import { FC } from "react";
import PropTypes from "prop-types";
import PageHeader from "../../../../components/PageHeader";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";
import { Box } from "../../../../components/Box/Box";
import { InviteActionToReplyType } from "../../../../types/InviteActionToReplyType";
import { useTranslation } from "react-i18next";

const InviteActionToReply: FC<InviteActionToReplyType> = ({
  onClickReply,
  onClickShare,
}) => {
  const { size } = typography;
  const { grey, skyBleu } = colors;
  const { t } = useTranslation();
  return (
    <Box mt={1}>
      <PageHeader fontSize={size.xs} textAlign={"left"} color={skyBleu[600]}>
        <span onClick={onClickReply} style={{ cursor: "pointer" }}>
          {t("Reponn")}
        </span>
        <span style={{ marginLeft: 8, marginRight: 8, color: grey[700] }}>
          |
        </span>
        <span
          onClick={onClickShare}
          style={{
            cursor: "pointer",
          }}
        >
          {t("Pataje")}
        </span>
      </PageHeader>
    </Box>
  );
};

InviteActionToReply.propTypes = {
  onClickReply: PropTypes.func.isRequired,
  onClickShare: PropTypes.func.isRequired,
};

export default InviteActionToReply;
