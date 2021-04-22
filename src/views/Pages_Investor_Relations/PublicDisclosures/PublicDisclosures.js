import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Box, Button } from "@material-ui/core";

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

const PublicDisclosures = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/musteri-emri-gerceklestirme-yonetmeligi.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            Müşteri Emri Gerçekleştirme Yönetmeliği
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/musteri-siniflandirma-kavramlari-ve-uygunluk-testi-bilgilendirme-politikasi.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            Müşteri Sınıflandırma Kavramları ve Uygunluk Testi Bilgilendirme
            Politikası
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/yatirim-hizmetleri-ve-faaliyetleri-cerceve-sozlesmesi-ayaz-revize.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            Yatırım Hizmetleri ve Faaliyet Çerçeve Sözleşmesi
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/ggib-vadeli-doviz-alim-satim-cerceve-sozlesmesi.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            Vaadeli Döviz Alım Satım Çerçeve Sözleşmesi
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/vadeli-turev-islemler-sozlesme-oncesi-bilgilendirme-ve-risk-bildirim-formu.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            Vadeli(Türev) İşlemler Sözleşme Öncesi Bilgilendirme ve Risk Bildiri
            Formu
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/spkyetkibelgesi.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            SPK Yetki Belgesi
          </Button>
        </Box>
      </Section>
    </div>
  );
};

export default PublicDisclosures;
