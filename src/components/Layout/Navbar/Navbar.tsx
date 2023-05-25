import * as React from 'react';
import type { FC } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { navBatItems } from '../../../routes/navBarItems';
import { useNavbarStyles } from './styles/useNavbarStyles';
import MobileDrawer from './components/MobileDrawer';
import colors from '../../../utils/theme/base/colors';

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
const { orange, grey } = colors;


const Navbar: FC = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const classes = useNavbarStyles()

  return (
    <>
     {mobileOpen && <div style={{background: 'rgba(78, 67, 67, 0.377)', zIndex: 10, position: 'absolute', left: 0, top: 0, height: '100vh', width: "100vw"}} /> }
    
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" elevation={0} position='fixed'
        sx={{
          borderBottom: 1,
          borderBottomColor: grey[300],
          display: 'flex',
          backgroundColor: orange.main,
        }}
      >
        <Toolbar className={classes.navbarContainer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'none', md: 'block', xs: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { sm: 'none', md: 'block', xs: 'none', flexGrow: 1 } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="secondary"
              className={classes.tabsContainer}
            >
              {navBatItems.map((item, index) => (
                <Tab key={index} value={index} label={item.label} onClick={() => navigate(item.path)} sx={{ color: 'white' }} className={classes.tab}/>
              ))}
            </Tabs>
          </Box>
          <Box sx={{ display: { sm: 'none', md: 'block', xs: 'none' } }}>
            <Button
              variant="contained"
              className={classes.applyButton}
              onClick={() => navigate('/signin')}
            >
             Konekte
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{background: 'red'}}>
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <MobileDrawer
            // @ts-ignore
            handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
    </Box>
    </>
  );
}


export default Navbar;