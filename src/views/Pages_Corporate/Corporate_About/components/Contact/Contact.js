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
              title="Iletisim"
              subtitle="Akliniza takilan her turlu soru icin, 7/24 ulasilabilir bankacilik."
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
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Telefon"
                  secondary="0212 215 26 41"
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
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x"
                    className={classes.icon}
                  />
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
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin@2x.png 2x"
                    className={classes.icon}
                  />
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
