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
      </Section>
    </div>
  );
};

export default IndexView;
