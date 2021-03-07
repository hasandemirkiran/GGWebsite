import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  List,
  ListItem,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Image, DarkModeToggler } from "components/atoms";
import MenuIcon from "@material-ui/icons/Menu";

//import logo
import horizontalLightRed from "../../../../assets/images/logo/horizontalLightRed.png";
import horizontalDarkRed from "../../../../assets/images/logo/horizontal_white_none.png";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 50,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    paddingRight: 0,
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  iconButton: {
    paddingRight: 0,
    "&:hover": {
      background: "transparent",
    },
  },
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  themeToggler,
  themeMode,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      <Toolbar>
        <div className={classes.logoContainer}>
          <a href="/" title="thefront">
            <Image
              className={classes.logoImage}
              src={
                themeMode === "light" ? horizontalLightRed : horizontalDarkRed
              }
              alt="thefront"
              lazy={false}
            />
          </a>
        </div>
        <Box flexGrow={1} />
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            <ListItem
              className={clsx(classes.listItem, "menu-item--no-dropdown")}
            >
              <Button
                className={classes.listItemText}
                component="a"
                href="/"
                variant="outlined"
              >
                SEE ALL PAGES
              </Button>
            </ListItem>
            <ListItem
              className={clsx(classes.listItem, "menu-item--no-dropdown")}
            >
              <Button
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                href="https://isube.goldenglobalbank.com.tr/Login/CorporateInitialLogin"
                className={classes.listItemButton}
              >
                INTERNET BANKACILIGI
              </Button>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            className={classes.iconButton}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default TopBar;
