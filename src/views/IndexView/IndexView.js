import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import { Section, SectionAlternate } from "components/organisms";
import {
  GetStarted,
  GetStarted2,
  Features,
  Services,
  Hero,
} from "./components";

// import imgs
import image1 from "../../assets/images/homepage_1.png";
import image2 from "../../assets/images/homepage_2.png";
import image3 from "../../assets/images/homepage_3.png";

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    "& .section-alternate__content": {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <Section
        style={{
          paddingLeft: "0",
          marginLeft: "0",
          paddingRight: "0",
          marginRight: "0",
          maxWidth: "initial",
        }}
      >
        <img
          src={image1}
          style={{
            width: "100%",
          }}
        ></img>
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section
        style={{
          paddingLeft: "0",
          marginLeft: "0",
          paddingRight: "0",
          marginRight: "0",
          maxWidth: "initial",
        }}
      >
        <img
          src={image3}
          style={{ width: "100%" }}
          style={{
            width: "100%",
          }}
        ></img>
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section
        style={{
          paddingLeft: "0",
          marginLeft: "0",
          paddingRight: "0",
          marginRight: "0",
          maxWidth: "initial",
        }}
      >
        <img
          src={image2}
          style={{ width: "100%" }}
          style={{
            width: "100%",
          }}
        ></img>
      </Section>
      {/* <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Services />
      <SectionAlternate>
        <Features />
      </SectionAlternate>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section narrow>
        <GetStarted />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section narrow>
        <GetStarted2 />
      </Section> */}
    </div>
  );
};

export default IndexView;
