import Typography from '@mui/material/Typography';
import ScrollToLogo from "./ScrollToLogo";
import colors from '../../utils/theme/base/colors';

const Logo = () => {

  const { error, grey } = colors;

  return (
    <ScrollToLogo
      textColorBefore={error.focus}
      textColorAfter={grey['900']}
      fadeIn={"0.7s ease-in"}
      fadeOut={"0.7s ease-out"}
    >
      <Typography fontWeight="900" fontSize="1.7rem">
        ZHaiti
        <span style={{ color: grey['100'] }}>News</span>
      </Typography>
    </ScrollToLogo>
  );
};

export default Logo;