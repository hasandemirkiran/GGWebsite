import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Contact, Hero } from "./components";

import { mapData } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: "0 5px 20px 0 rgba(90, 202, 157, 0.05)",
    "& .section-alternate__content": {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Contact data={mapData} />
    </div>
  );
};

export default ContactUs;
