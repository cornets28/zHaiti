import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../Grid/Grid";
import PageHeader from "../../PageHeader";
import colors from "../../../utils/theme/base/colors";
import typography from "../../../utils/theme/base/typography";
import { Box } from "../../Box/Box";
import { AuthorNameAndProfessionType } from "../../../types/AuthorNameAndProfessionType";
import { useTranslation } from "react-i18next";

const AuthorNameAndProfession: FC<AuthorNameAndProfessionType> = ({
  fullName,
  profession,
}) => {
  const { grey } = colors;
  const { h6 } = typography;
  const { t } = useTranslation();

  return (
    <Grid item xs={9} sm={10} md={10} lg={10} pl={1}>
      <Box mb={-0.6} mt={0.6}>
        <PageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
          <span style={{ fontWeight: "bold", fontFamily: "Helvetica" }}>
            {fullName}
          </span>
        </PageHeader>
      </Box>
      <PageHeader fontSize={h6} textAlign="left" color={grey["900"]}>
        {fullName} {t("se yon")} {profession}
      </PageHeader>
    </Grid>
  );
};

AuthorNameAndProfession.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default AuthorNameAndProfession;
