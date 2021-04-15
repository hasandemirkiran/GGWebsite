import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section, SectionAlternate } from "components/organisms";
import { Process } from "./components";
import { Box, Button } from "@material-ui/core";
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
      <Section>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={samplePDF}
            variant="contained"
            target="blank"
            fullWidth
          >
            Urun ve Hizmet Ucretlendirmelerimiz
          </Button>
        </Box>
      </Section>
    </div>
  );
};

export default ProductandServicesPrice;
