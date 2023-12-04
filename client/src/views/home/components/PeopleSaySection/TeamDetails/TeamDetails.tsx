import type { FC } from "react";
import PropTypes from "prop-types";
import { Divider } from "../../../../../components/Divider/Divider";
import { Typography } from "../../../../../components/Typography/Typography";
import { TeamDetailsType } from "../../../../../types/TeamDetailsType";
import colors from "../../../../../utils/theme/base/colors";
import typography from "../../../../../utils/theme/base/typography";
import { usePeopleSayStyle } from "../../../styles/usePeopleSayStyle";

export const TeamDetails: FC<TeamDetailsType> = ({
  testimonial,
  fullname,
  role,
}) => {
  const { white2, warning } = colors;
  const { h6, h5 } = typography;
  const classes = usePeopleSayStyle();

  return (
    <>
      <Divider className={classes.divider} />
      <Typography
        fontSize={h6}
        color={white2.main}
        textAlign="center"
        marginTop={2}
        marginBottom={2}
      >
        {testimonial}
      </Typography>

      <Typography fontSize={h5} color={warning.focus} textAlign="center">
        {fullname}
      </Typography>

      <Typography fontSize={h6} color={white2.main} textAlign="center">
        {role}
      </Typography>
    </>
  );
};

TeamDetails.propTypes = {
  testimonial: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamDetails;
