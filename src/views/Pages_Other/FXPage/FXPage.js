import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Section, SectionAlternate } from "components/organisms";

// import components
import CurrencyConverter from "./components/CurrencyConverter.js";
import FXDescription from "./components/FXDescription.js";
import CurrencyTable from "./components/CurrencyTable.js";

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 0),
    },
  },
}));

const FXPage = () => {
  const classes = useStyles();

  return (
    <div>
      <SectionAlternate>
        <FXDescription />
        <Divider className={classes.divider} />
        <CurrencyConverter />
      </SectionAlternate>
      <Section className={classes.pagePaddingTop}>
        <CurrencyTable />
      </Section>
      <Divider />
    </div>
  );
};

export default FXPage;
