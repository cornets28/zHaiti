import { makeStyles } from "@mui/styles";
import theme from "../../../../utils/theme";
import colors from '../../../../utils/theme/base/colors'

const { orange, warning, blue, darkBleu } = colors;

export const useNavbarStyles = makeStyles(() => ({

  navigationWrapper: {
    flexGrow: 1,
    left: 0,
    right: 100,
    [theme.breakpoints.down(1181)]: {
    }
  },

  navbarContainer: {
    marginLeft: 70,
    marginRight: 70,
    background: darkBleu.main,
    [theme.breakpoints.down(1181)]: {
      marginLeft: 0,
      marginRight: 0,
    }
  },

  tabsContainer: {
    width: 750,
    [theme.breakpoints.down(1181)]: {
      left: 0,
      right: 0,
    },
    [theme.breakpoints.down(985)]: {
      width: 730,
    },

    [theme.breakpoints.down(962)]: {
      width: 710,
      fontSize: 11
    },

    [theme.breakpoints.down(942)]: {
      width: 700,
    },

    [theme.breakpoints.down(911)]: {
      width: 690,
    },
  },

  active: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
  },

  tab: {
    [theme.breakpoints.down(985)]: {
      backgroundColor: `${orange.main} !important`,
    },
    [theme.breakpoints.down(961)]: {
      backgroundColor: `${orange.main} !important`,
      fontSize: 12.5
    },

  },

  applyButton: {
    wminWidth: 120,
    maxWidth: 200,
    color: `${theme.palette.grey['100']} !important`,
    backgroundColor: `${theme.palette.error.main} !important`,
    marginLeft: '2rem !important',
    "&:active": {
      backgroundColor: `${blue.main} !important`,
    },
    [theme.breakpoints.down(985)]: {
      marginLeft: 0,
    },

    [theme.breakpoints.down(962)]: {

      fontSize: 11
    },

    [theme.breakpoints.down(931)]: {
      width: 100,
      marginLeft: -10
    },

    [theme.breakpoints.down(911)]: {
      width: 100,
      marginLeft: -20
    },
  },

  applyButtonDrawer: {
    width: 200,
    color: `${theme.palette.primary.main} !important`,
    backgroundColor: `${theme.palette.error.main} !important`,
    marginTop: '6rem !important',
    "&:active": {
      backgroundColor: `${blue.main} !important`,
    },
   
  },

  drawer: {
    backgroundColor: darkBleu.main,
    color: theme.palette.primary.main,
  },

  drawerButton: {
    color: `${theme.palette.primary.main} !important`,
  },

  divider: {
    backgroundColor: warning.focus,
    height: 2
  },

  selected: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
  }

}));
