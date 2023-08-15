import type { FC } from "react";
import PropTypes from "prop-types";
import { Typography } from "../../../../../components/Typography/Typography";
import colors from "../../../../../utils/theme/base/colors";
import { TeamInfoDetailsType } from "../../../../../types/TeamInfoDetailsType";
import typography from "../../../../../utils/theme/base/typography";
import circlePlus from "../../../../../images/circlePlus.png";

export const TeamInfoDetails: FC<TeamInfoDetailsType> = ({
  fullname,
  role,
}) => {
  const { white2 } = colors;
  const { h5, h6 } = typography;

  return (
    <>
      <Typography
        fontSize={h5}
        color={white2.main}
        component="div"
        sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
      >
        {fullname}
      </Typography>
      <Typography
        fontSize={h6}
        color={white2.main}
        component="p"
        textTransform="uppercase"
        sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
      >
        {role}
      </Typography>
      <Typography
        component="div"
        pt={3}
        sx={{ paddingLeft: { xs: "13%", sm: 0 } }}
      >
        <img src={circlePlus} alt="Cicle Plus" width={40} height={40} />
      </Typography>
    </>
  );
};

TeamInfoDetails.propTypes = {
  fullname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamInfoDetails;
