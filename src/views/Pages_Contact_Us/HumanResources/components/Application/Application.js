import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { IconText } from "components/atoms";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles((theme) => ({
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
  iconText: {
    fontWeight: 700,
    marginLeft: theme.spacing(2),
  },
  form: {
    "& .MuiTextField-root": {
      background: theme.palette.background.paper,
    },
    "& .MuiOutlinedInput-input": {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  uploadButton: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid transparent",
    background: theme.palette.alternate.dark,
    textTransform: "lowercase",
    "& .icon-text": {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
}));

const Application = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="İş Başvuru Formu"
        subtitle="Şirketimize iş başvurusu yapmak için formumuzu doldurabilirsiniz."
        subtitleProps={{
          variant: "body1",
          color: "textPrimary",
        }}
        data-aos="fade-up"
        align={isMd ? "center" : "left"}
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              İsim Soyisim
            </Typography>
            <TextField
              placeholder="İsminizi giriniz"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="E-mailinizi giriniz"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <Button
              variant="outlined"
              component="label"
              color="primary"
              fullWidth
              size="large"
              className={classes.uploadButton}
            >
              <IconText
                fontIconClass="fas fa-cloud-upload-alt"
                color={theme.palette.primary.main}
                title="CV yükle"
                typographyProps={{
                  className: classes.iconText,
                }}
              />
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <Button
              variant="outlined"
              component="label"
              color="primary"
              fullWidth
              size="large"
              className={classes.uploadButton}
            >
              <IconText
                fontIconClass="fas fa-cloud-upload-alt"
                color={theme.palette.primary.main}
                title="Niyet mektubu yükle"
                typographyProps={{
                  className: classes.iconText,
                }}
              />
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Mesajınız
            </Typography>
            <TextField
              placeholder="Başvurduğunuz pozisyonları ve belirtmek istediklerinizi yazınız"
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
                <a
                  href="https://goldenglobalbank.com.tr/icerik/uploads/2020/07/calisan_adayi_aydinlatma_metni.pdf"
                  target="blank"
                >
                  Çalışan Adayı Aydınlatma Metni
                </a>
                ’ni okudum, anladım. Gönderilen CV’lerde 6698 sayılı Kişisel
                Verilerin Korunması Kanunu’nun 6. maddesinde yer alan ve “Özel
                Nitelikli Kişisel Veriler” olarak adlandırılan “ırk, etnik
                köken, siyasi düşünce, felsefi inanç, din, mezhep veya diğer
                inançlar, kılık ve kıyafet, dernek, vakıf ya da sendika üyeliği,
                sağlık, cinsel hayat, ceza mahkûmiyeti ve güvenlik tedbirleriyle
                ilgili veriler ile biyometrik ve genetik veriler” in
                paylaşılmaması rica olunur. Zira CV içerisinde gönderilebilecek
                özel nitelikli kişisel veriler, 6698 sayılı kanun ve ilgili
                mevzuatlar gereğince açık rıza hukuki sebebi uyarınca
                işlenebilir.
              </Typography>
              <div>
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} color="primary" />}
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
            >
              Gönder
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Application.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Application;
