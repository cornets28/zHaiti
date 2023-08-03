import React from 'react'
import PropTypes from 'prop-types';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import colors from "../../utils/theme/base/colors";

const { white2, error } = colors;

const LightTooltip = styled(({ className, ...props}: TooltipProps) => (
  
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: error.focus,
      color: white2.main,
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  LightTooltip.propTypes = {
    className: PropTypes.any,
  }

export default LightTooltip;
