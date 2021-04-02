import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { WhoWeAre } from "../Corporate_About/components";
import { Team } from "../Corporate_About/components";

import { team } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionPaddingTop: {
    paddingTop: 20,
  },
  sectionPartners: {
    boxShadow: "0 5px 20px 0 rgba(90, 202, 157, 0.05)",
    "& .section-alternate__content": {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const Board = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.sectionNoPaddingTop}>
        <Team data={team} />
      </Section>
    </div>
  );
};

export default Board;
