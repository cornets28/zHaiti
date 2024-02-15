import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../../utils/theme/base/colors";
import { CardContent } from "../../../../../components/CardContent/CardContent";
import { TeamSocialMediaContainerType } from "../../../../../types/TeamSocialMediaContainerType";

export const TeamSocialMediaContainer: FC<TeamSocialMediaContainerType> = ({
  children,
}) => {
  const { darkBlue } = colors;

  return (
    <CardContent sx={{ height: 160, bgcolor: darkBlue.main }}>
      {children}
    </CardContent>
  );
};

TeamSocialMediaContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeamSocialMediaContainer;
