import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { Image, DarkModeToggler } from "components/atoms";

//import logo
import horizontalLightRed from "../../../../assets/images/logo/horizontalLightRed.png";
import horizontalDarkRed from "../../../../assets/images/logo/horizontal_white_none.png";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  topBarButton: {
    whiteSpace: "nowrap",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark,
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0,
    },
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
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
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    marginRight: theme.spacing(5),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const corporate = pages.corporate;
  const services = pages.services;
  const contact = pages.contact;

  const MenuGroup = (props) => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body1"
              component={"a"}
              href={page.href}
              className={clsx(classes.navLink, "submenu-item")}
              color="textSecondary"
              onClick={handleClose}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const CorporatePages = () => {
    const { corporateChildren } = corporate.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={corporateChildren} />
        </div>
      </div>
    );
  };

  const ServicesPages = () => {
    const { credit, trade, treasury, others } = services.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={credit} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={trade} />
          <MenuGroup item={treasury} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={others} />
        </div>
      </div>
    );
  };

  const ContactPages = () => {
    const { contacts } = contact.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={contacts} />
        </div>
      </div>
    );
  };

  const renderPages = (id) => {
    if (id === "corporate-pages") {
      return <CorporatePages />;
    }
    if (id === "services-pages") {
      return <ServicesPages />;
    }
    if (id === "contact-pages") {
      return <ContactPages />;
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src={themeMode === "light" ? horizontalLightRed : horizontalDarkRed}
            alt="thefront"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {[corporate, services, contact].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                onClick={(e) => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : ""
                )}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(classes.listItemText, "menu-item")}
                >
                  {page.title}
                </Typography>
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === page.id ? classes.expandOpen : ""
                    }
                    fontSize="small"
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={page.id}
                open={openedPopoverId === page.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                classes={{ paper: classes.popover }}
              >
                <div>{renderPages(page.id)}</div>
              </Popover>
            </div>
          ))}
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <DarkModeToggler
              themeMode={themeMode}
              onClick={() => themeToggler()}
            />
          </ListItem>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button
              variant="outlined"
              component="a"
              href="/documentation"
              className={classes.topBarButton}
            >
              Faaliyet Raporu
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
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
