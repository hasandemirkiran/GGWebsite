import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { SectionHeader, TypedText } from "components/molecules";
import { HeroShaped } from "components/organisms";
import "./hero.css";

// import image
import CollageLight from "../../../../assets/images/collage_light.png";
import CollageDark from "../../../../assets/images/collage_dark.png";

// import FXTable
import FXTable from "../../../../components/organisms/FXTable/FXTable.js";

const useStyles = makeStyles((theme) => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    "& .section-header__cta-container": {
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        "& .section-header__cta-item-wrapper": {
          width: "100%",
          "&:last-child": {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          "& .MuiButtonBase-root": {
            width: "100%",
          },
        },
      },
    },
  },
  heroShaped: {
    "& .hero-shaped__image": {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down("sm")]: {
      "& .hero-shaped__image": {
        position: "relative",
      },
      "& .hero-shaped__wrapper": {
        flexDirection: "column",
      },
    },
  },
  imageAnimation: {
    background: `url(${CollageLight})`,
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundSize: "400px auto",
    animation: `$slideshow 50s linear infinite`,
    width: "600%",
    height: "600%",
    backgroundColor: theme.palette.alternate.dark,
    top: "-25%",
    left: "-100%",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "800px auto",
    },
  },
  imageAnimationDark: {
    background: `url(${CollageDark})`,
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundSize: "400px auto",
    animation: `$slideshow 50s linear infinite`,
    width: "600%",
    height: "600%",
    backgroundColor: theme.palette.alternate.dark,
    top: "-25%",
    left: "-100%",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "800px auto",
    },
  },
  "@keyframes slideshow": {
    "0%": {
      transform: "rotate(-13deg) translateY(-25%)",
    },
    "100%": {
      transform: "rotate(-13deg) translateY(-80%)",
    },
  },
}));

const Hero = ({ themeMode = "light", className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Golden Global Bank
      <br />
      <TypedText
        component="span"
        variant="h3"
        className={"fluent"}
        typedProps={{
          strings: [
            "yatirimin yeni rotasi",
            "gelecege guvenle bak",
            "faizsiz yatirim",
            "dis ticaretin bankasi",
            "yeni nesil banka",
            "global yatirim ortagi",
            "ve daha fazlasi...",
          ],
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle =
    "Bankacılık ve uluslararası ticaret alanındaki profesyonel yöneticilik ve girisimci kimlikleriyle üst düzey tecrübeye sahip ortaklar tarafından, ağırlıklı olarak dış ticaret firmalarına bankacılık hizmetleri ve alternatif finansman yöntemleri sunmak amacıyla kurulan Golden Global Bank.";

  const docsButton = (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      component="a"
      href="/documentation"
    >
      Hakkimizda
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/home"
    >
      Internet Bankaciligi
    </Button>
  );

  const leftSideContent = (
    <div>
      <div style={{ maxWidth: "35rem", paddingBottom: "2rem", margin: "auto" }}>
        <FXTable />
      </div>
      {/* <div className="fxInfo">
        <Button
          size="small"
          variant="contained"
          color="primary"
          component="a"
          href="/vision-mission"
        >
          Daha Fazla
        </Button>
      </div> */}

      <SectionHeader
        title={title}
        subtitle={subtitle}
        align="left"
        titleProps={{
          variant: "h2",
          color: "textPrimary",
        }}
        ctaGroup={[docsButton, buyButton]}
        data-aos="fade-right"
        disableGutter
        className={classes.leftSideContent}
      />
    </div>
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === "dark" ? classes.imageAnimationDark : ""
            )}
          />
        }
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Hero;
