import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import { Services } from "./components";

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

const Announcements = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Services />
    </div>
  );
};

export default Announcements;
