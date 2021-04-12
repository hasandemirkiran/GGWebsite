import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, ListItem, ListItemText } from "@material-ui/core";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles((theme) => ({
  fontWeightBold: {
    fontWeight: "bold",
  },
  faqTitle: {
    display: "block",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

const Faq = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Degerlerimiz"
        titleProps={{
          className: classes.fontWeightBold,
        }}
      />
      <Grid container spacing={isMd ? 4 : 0}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <h3 style={{ color: "#AF182D" }}>
              {" "}
              <li>{item.title}</li>
            </h3>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
