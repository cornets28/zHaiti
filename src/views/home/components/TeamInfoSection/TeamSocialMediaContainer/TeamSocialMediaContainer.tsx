import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../../utils/theme/base/colors";
import { CardContent } from "../../../../../components/CardContent/CardContent";
import { TeamSocialMediaContainerType } from "../../../../../types/TeamSocialMediaContainerType";

export const TeamSocialMediaContainer: FC<TeamSocialMediaContainerType> = ({
  children,
}) => {
  const { darkBleu } = colors;

  return (
    <CardContent sx={{ height: 160, bgcolor: darkBleu.main }}>
      {children}
    </CardContent>
  );
};

TeamSocialMediaContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeamSocialMediaContainer;
