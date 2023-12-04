import React, { cloneElement } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navBatItems } from "../../../routes/navBarItems";
import { useNavbarStyles } from "./styles/useNavbarStyles";
import MobileDrawer from "./components/MobileDrawer";
import colors from "../../../utils/theme/base/colors";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import SignInButton from "./components/SignInButton";
import UserMenu from "../../UserMenu/UserMenu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "../../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { setAuthModalOpen } from "../../../redux/features/authModalSlice";

interface ScrollAppBarProps {
  window?: () => Window;
  children: ReactNode;
}

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
const { darkBleu, error } = colors;

const Navbar: FC = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  // @ts-ignore
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useNavbarStyles();

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const ScrollAppBar: FC<ScrollAppBarProps> = ({ children, window }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 50,
      target: window ? window() : undefined,
    });
    // @ts-ignore
    return cloneElement(children, {
      sx: {
        backgroundColor: trigger ? error.focus : darkBleu.main,
      },
    });
  };

  return (
    <>
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="primary"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>

              <Box
                sx={{
                  display: { xs: "inline-block", md: "none" },
                  paddingLeft: "50%",
                }}
              >
                <Logo />
              </Box>
            </Stack>

            {/* main menu */}
            <Box
              flexGrow={1}
              alignItems="center"
              display={{ xs: "none", md: "flex" }}
            >
              <Box sx={{ marginRight: "30px" }}>
                <Logo />
              </Box>
              <div>
                <select onChange={handleLanguageChange} value={i18n.language}>
                  <option value="ht">Kreyòl</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </Box>
            {/* main menu */}
            <Box
              sx={{
                display: { sm: "none", md: "block", xs: "none", flexGrow: 1 },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
                className={classes.tabsContainer}
              >
                {navBatItems.map((item, index: number) => (
                  <Tab
                    key={index}
                    value={index}
                    label={t(`${item.label}`)}
                    onClick={() => navigate(item.path)}
                    sx={{ color: "white" }}
                    className={classes.tab}
                  />
                ))}
              </Tabs>
            </Box>

            <Stack spacing={3} direction="row" alignItems="center">
              {!user && (
                <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
                  <SignInButton
                    onClick={() => dispatch(setAuthModalOpen(true))}
                  />
                </Box>
              )}
            </Stack>
            {<UserMenu />}
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
      <Box component="nav">
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
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <MobileDrawer
            // @ts-ignore
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
