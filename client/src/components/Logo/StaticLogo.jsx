import { Typography } from "../Typography/Typography";
import colors from '../../utils/theme/base/colors';

const StaticLogo = () => {
    const { error, grey } = colors;
    return (
        <Typography fontWeight="900" fontSize="1.7rem" color={error.focus}>
            ZHaiti
            <span style={{ color: grey['100'] }}>News</span>
        </Typography>
    );
};

export default StaticLogo;