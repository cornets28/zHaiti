import { makeStyles } from "@mui/styles";
import colors from '../../../utils/theme/base/colors'

const { white2 } = colors;

export const userHaitiImageStyle = makeStyles(() => ({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    textOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: white2.main,
      },
     h1Tag: {
        fontSize: '3rem',
        marginBottom: '1rem',
      }
}));

