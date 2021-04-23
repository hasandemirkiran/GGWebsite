import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(-8),
      marginRight: theme.spacing(-8),
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "47vw",
      maxWidth: 740,
      height: "100%",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
      height: "100%",
    },
  },
  content: {
    flex: "0 0 100%",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
}));

const CustomerSatisfaction = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="https://assets.maccarianagency.com/the-front/photos/account/cover-4.jpg"
              alt="Contact"
              className={classes.image}
              lazyProps={{ width: "100%" }}
            />
          </div>
          <div className={classes.content}>
            <SectionHeader
              title="Görüs, öneri ve sikayetlerinizi bize bildirebilirsiniz."
              subtitle="Memnuniyetiniz Bizim İçin Önemli."
              data-aos="fade-up"
              align="center"
            />
            <div>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Isim Soyisim
                  </Typography>
                  <TextField
                    placeholder="Isminiz"
                    variant="outlined"
                    size="medium"
                    name="fullname"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Telefon Numarasi
                  </Typography>
                  <TextField
                    placeholder="Telefon Numarasi"
                    variant="outlined"
                    size="medium"
                    name="telno"
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    E-mail
                  </Typography>
                  <TextField
                    placeholder="E-mail adresinizi giriniz"
                    variant="outlined"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Musteri No/T.C Kimlik No
                  </Typography>
                  <TextField
                    placeholder="Musteri No/T.C Kimlik No giriniz"
                    variant="outlined"
                    size="medium"
                    name="tcno"
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Konu
                  </Typography>
                  <TextField
                    placeholder="Konuyu yaziniz"
                    variant="outlined"
                    name="message"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Mesajiniz
                  </Typography>
                  <TextField
                    placeholder="Mesajiniz."
                    variant="outlined"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item container justify="center" xs={12}>
                  <div>
                    <Typography variant="caption" gutterBottom>
                      Kişisel Verilerle İlgili{" "}
                      <a href="kvkk">Aydınlatma Metni</a>
                      ’ni okudum, başvuru kapsamında kişisel verilerimin
                      işlenmesine, onayım vardır.
                    </Typography>
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox defaultChecked={false} color="primary" />
                        }
                        label="Okudum Onaylıyorum"
                      />
                    </div>
                  </div>
                </Grid>

                <Grid item container justify="center" xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Gonder
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Section>
      <Divider />
    </div>
  );
};

export default CustomerSatisfaction;
