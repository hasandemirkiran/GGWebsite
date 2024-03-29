import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import { Image } from "components/atoms";

//import logo
import horizontalDarkRed from "../../../../assets/images/logo/horizontal_white_none.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    maxWidth: "5rem",
    [theme.breakpoints.up("md")]: {
      maxWidth: "5rem",
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  divider: {
    width: "100%",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  const corporate = pages.corporate;
  const services = pages.services;
  const investor = pages.investor;
  const contact = pages.contact;

  const MenuGroup = (props) => {
    const { item } = props;
    console.log(item, "ITEMM");
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={"a"}
              href={page.href}
              className={clsx(classes.navLink, "submenu-item")}
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
    const { investorChildren } = investor.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={corporateChildren} />
          <MenuGroup item={investorChildren} />
        </div>
      </div>
    );
  };

  const ServicesPages = () => {
    const { credit, trade, treasury, others } = services.children;
    const { contacts } = contact.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={credit} />
        </div>
        <div>
          <MenuGroup item={trade} />
          <MenuGroup item={treasury} />
        </div>
        <div>
          <MenuGroup item={others} />
          <MenuGroup item={contacts} />
        </div>
      </div>
    );
  };

  // const ContactPages = () => {
  //   const { contacts } = contact.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div>
  //         <MenuGroup item={contacts} />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="thefront">
                    <Image
                      className={classes.logoImage}
                      src={horizontalDarkRed}
                      alt="Golden Global Bank"
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                <CorporatePages />
              </Grid>
              <Grid item>
                <ServicesPages />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
