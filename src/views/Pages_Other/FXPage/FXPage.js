import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Section, SectionAlternate } from "components/organisms";
import { SectionHeader, DescriptionCta } from "components/molecules";
import CurrencyConverter from "./components/CurrencyConverter.js";

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
      <Section className={classes.pagePaddingTop}>
        <DescriptionCta
          title="İnsan Kaynakları"
          align={"left"}
          titleProps={{
            variant: "h3",
            className: classes.title,
            color: "textPrimary",
          }}
          subtitleProps={{
            color: "textPrimary",
          }}
        />
        <Divider className={classes.divider} />
        <CurrencyConverter />
      </Section>
      <SectionAlternate></SectionAlternate>

      <Divider />
    </div>
  );
};

export default FXPage;
