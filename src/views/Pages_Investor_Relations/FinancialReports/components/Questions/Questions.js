import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { IconAlternate } from "components/molecules";
import { Accordion } from "components/organisms";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
  accordionGrid: {
    "& .accordion__item-wrapper": {
      boxShadow: "0 1.5rem 4rem rgba(22,28,45,.05)",
    },
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  fontWeight300: {
    fontWeight: 300,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  listItemText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: "white",
    fontWeight: 700,
  },
}));

const Questions = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            <ListItem disableGutters>
              <ListItemText
                primary={data.title}
                secondary={data.subtitle}
                primaryTypographyProps={{
                  variant: "h6",
                }}
                secondaryTypographyProps={{
                  variant: "h6",
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.accordionGrid}>
          <Accordion
            items={data.items}
            titleProps={{
              variant: "subtitle1",
              className: classes.fontWeightBold,
            }}
            subtitleProps={{
              className: classes.fontWeight300,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Questions.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Questions;
