import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section, SectionAlternate } from "components/organisms";
import { Process } from "./components";

//show pdf
import samplePDF from "../../../../assets/PDFs/urunvemusterihiz.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.root}>
      <Section>
        <Document
          file="./urunvemusterihiz.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Section>
    </div>
  );
};

export default ProductandServicesPrice;
