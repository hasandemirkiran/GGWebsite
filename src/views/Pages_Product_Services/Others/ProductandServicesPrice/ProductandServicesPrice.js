import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section, SectionAlternate } from "components/organisms";
import { Process } from "./components";

//show pdf
import samplePDF from "../../../../assets/PDFs/urunvemusterihiz.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionAlternate: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const ProductandServicesPrice = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section></Section>
    </div>
  );
};

export default ProductandServicesPrice;
