import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

//import svg background
import svgBackground from "../../../../../assets/images/Protruding-Squares.png";
import "./Hero.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    minHeight: 400,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className="backgroundAbout">
        <Section className={(classes.section, classes.image)}>
          <SectionHeader
            title="Hakkımızda"
            subtitle="Bankacılık ve uluslararası ticaret alanlarinda kurulmuş, şeffaflık esaslı bir banka."
            align="left"
            data-aos="fade-up"
            disableGutter
            titleProps={{
              className: clsx(classes.title, classes.textWhite),
              variant: "h3",
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
          />
        </Section>
      </div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
