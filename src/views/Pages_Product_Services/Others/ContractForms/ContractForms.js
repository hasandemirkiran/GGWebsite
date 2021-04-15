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

const ContractForms = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href="https://goldenglobalbank.com.tr/icerik/uploads/2020/06/bankacilik_-sozlesmesi-oncesi_bilgilendirme_formu.pdf"
            variant="contained"
            target="blank"
            fullWidth
          >
            Bankacilik Hizmetleri Sozlesme Oncesi Bilgilendirme Formu
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href="https://goldenglobalbank.com.tr/icerik/uploads/2020/03/bankacilik_hizmetleri_sozlesmesi.pdf"
            variant="contained"
            target="blank"
            fullWidth
          >
            Bankacilik Hizmetleri Sozlesmesi
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href="https://goldenglobalbank.com.tr/icerik/uploads/2020/06/Genel_Kredi_Sozlesmesi_Sozlesme_Oncesi_Bilgilendirme_Formu.pdf"
            variant="contained"
            target="blank"
            fullWidth
          >
            Genel Kredi Sozlesmesi Sozlesme Oncesi Bilgilendirme Formu
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href="https://goldenglobalbank.com.tr/icerik/uploads/2020/06/Genel_Kredi_Sozlesmesi.pdf"
            variant="contained"
            target="blank"
            fullWidth
          >
            Genel Kredi Sozlesmesi Sozlesmei
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href="https://goldenglobalbank.com.tr/icerik/uploads/2020/06/Teminatlar_Hakk%C4%B1nda_Bilgilendirme.pdf"
            variant="contained"
            target="blank"
            fullWidth
          >
            Teminatlar Hakkinda Bilgilendirme
          </Button>
        </Box>
      </Section>
    </div>
  );
};

export default ContractForms;
