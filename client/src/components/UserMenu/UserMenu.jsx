import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ListItemButton, ListItemIcon, ListItemText, Menu } from "@mui/material";
import { Typography } from '../Typography/Typography';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice.js";
import { useTranslation } from "react-i18next";

const UserMenu = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (e) => setAnchorEl(e.currentTarget);

  return (
    <>
      {user && (
        <>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", userSelect: "none" }}
            onClick={toggleMenu}
            color={'white'}
          >
            {user.displayName}
          </Typography>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { padding: 0 } }}
          >
            Coming Soon!!!
            <ListItemButton
              sx={{ borderRadius: "10px" }}
              onClick={() => dispatch(setUser(null))}
            >
              <ListItemIcon><LogoutOutlinedIcon /></ListItemIcon>
              <ListItemText disableTypography primary={
                <Typography textTransform="uppercase">{t("Dekonekte")}</Typography>
              } />
            </ListItemButton>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserMenu;