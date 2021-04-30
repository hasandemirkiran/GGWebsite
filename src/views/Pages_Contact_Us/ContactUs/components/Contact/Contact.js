import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { HeroShaped, Map } from "components/organisms";

//import icons
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import HttpIcon from "@material-ui/icons/Http";

const useStyles = makeStyles(() => ({
  map: {
    zIndex: 9,
  },
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
}));

const Contact = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title="İletişim"
              subtitle="Aklınıza takılan her türlü soru için, 7/24 ulaşılabilir bankacılık."
              subtitleProps={{
                variant: "body1",
                color: "textPrimary",
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="İşletme Adı"
                  secondary="Golden Global Bank"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Ticaret Ünvanı"
                  secondary="Golden Global Yatırım Bankası AŞ."
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Ticaret Sicil Numarası"
                  secondary="213202"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Vergi Numarası"
                  secondary="3961233191"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Vergi Dairesi"
                  secondary="Zincirlikuyu"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Sorumlu Kişiler"
                  secondary="Golden Global Yatırım Bankası Yönetim Kurulu"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Yer Sağlayıcı"
                  secondary="Golden Global Yatırım Bankası Anonim Şirketi"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Yetkili Denetim Organı"
                  secondary="BANKACILIK DÜZENLEME VE DENETLEME KURUMU (BDDK)"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AccountBalanceIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Mersis No"
                  secondary="0396-1233-1910-0001"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <AddIcCallIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Telefon"
                  secondary="+(90) 0212 215 26 41"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <LocalPrintshopIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Fax"
                  secondary="+(90) 0212 215 26 44"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <MailIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="info.ggbank@goldenglobalbank.com.tr"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <MailIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="KEP"
                  secondary="goldenglobal@hs02.kep.tr"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <RoomIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Head Ofis"
                  secondary="Esentepe Mh. Büyükdere Cd. No:127 B/17 Sisli/İSTANBUL - Türkiye"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>

              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <HttpIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Web Sitesi"
                  secondary="www.goldenglobalbank.com.tr"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textSecondary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
        rightSide={
          <Map
            center={[41.0082, 28.9784]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
