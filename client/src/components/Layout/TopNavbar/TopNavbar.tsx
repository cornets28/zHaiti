import { FC } from "react";
// import PropTypes from "propTypes";
import Grid from "@mui/material/Grid/Grid";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import ScrollToTopNavbar from "./ScrollToTopNavbar";
import colors from "../../../utils/theme/base/colors";
import { useLocation } from "react-router-dom";
import { Typography } from "../../Typography/Typography";
import { topNavBatItems } from "../../../routes/topNavbarItems";


const TopNavbar:FC = ({}) => {
  const { grey, error } = colors;
  const location = useLocation();
  const { pathname } = location;
  const containsString = (label: string) => pathname.includes(label);

  return (
    // @ts-ignore
    <ScrollToTopNavbar
      textColorBefore={"green"}
      textColorAfter={grey["900"]}
      fadeIn={"0.7s ease-in"}
      fadeOut={"0.7s ease-out"}
    >
      <Grid
        sx={{
          bgcolor: grey[100],
        }}
      >
        <AppBar position="static" elevation={0}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              WebkitJustifyContent: "center",
              height: 30,
              padding: 0,
              width: "100vw",
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <List
              component="nav"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {topNavBatItems.map(({ label, path }) => (
                <ListItem key={label} component={Link} to={path}>
                  {label === "Kilti" && (
                    <span style={{ paddingRight: 30, color: grey[500] }}>
                      {" "}
                      |{" "}
                    </span>
                  )}
                  <ListItemText
                    sx={{
                      textDecoration: "none",
                      textTransform: "capitalize",
                      textAlign: "center",
                      color: containsString(label.toLowerCase())
                        ? error.focus
                        : grey[900],
                      fontSize: 10,
                      width: label === "Tem Ak Kondisyon" ? 149 : "auto",
                    }}
                    primary={
                      <Typography fontWeight={"bold"}>{label}</Typography>
                    }
                  />
                  <span style={{ paddingLeft: 30, color: grey[500] }}> | </span>
                </ListItem>
              ))}
            </List>
          </Grid>
        </AppBar>
      </Grid>
    </ScrollToTopNavbar>
  );
}

export default TopNavbar;
