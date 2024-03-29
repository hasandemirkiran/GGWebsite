import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Image } from "components/atoms";

//import logo
import horizontalLightRed from "../../../../assets/images/logo/horizontalLightRed.png";
import horizontalDarkRed from "../../../../assets/images/logo/horizontal_white_none.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainer: {
    width: 82,
    height: 46,
    [theme.breakpoints.up("md")]: {
      width: 82,
      height: 42,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
}));

const Topbar = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
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
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
