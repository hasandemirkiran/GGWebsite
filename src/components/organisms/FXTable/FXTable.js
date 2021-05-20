import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  container: {
    padding: "0px!important",
    borderLeft: "6px solid #ae182d",
    // background: "#eee",
  },
  root: {
    border: "5px",
    paddingLeft: "8px",
    paddingTop: "0px",
    // background: "#eee",
  },
  title: {
    fontSize: 10,
  },
  numberUSD: {
    fontSize: 17,
    color: "#C0C3A0",
  },
  numberEUR: {
    fontSize: 17,
    color: "#C1CACD",
  },
  numberGBP: {
    fontSize: 17,
    color: "#D1C5DA",
  },
  numberXAU: {
    fontSize: 17,
    color: "#B8860B",
  },
  numberXAG: {
    fontSize: 17,
    color: "#C0C0C0",
  },
  numberXPT: {
    fontSize: 17,
    color: "#e5e4e2",
  },
});

class FXTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rates: {
        GBP: "0.7069",
        EUR: "0.8220",
        TRY: "8.3040",
        XAU: "0.00054678",
        XAG: "0.03647507",
        XPT: "0.00082816",
      },
    };
  }

  componentDidMount = () => {
    // axios
    //   .get(
    //     `https://openexchangerates.org/api/latest.json?app_id=247c223e6b6943c8bb93697c12d4a3ea`
    //   )
    //   .then(
    //     (res) => {
    //       this.setState({
    //         isLoaded: true,
    //         rates: res.data.rates,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
  };

  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const { classes } = this.props;

    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-dollar-sign"
                  style={{ marginRight: 5, color: "#C0C3A0" }}
                ></i>
                USD/TRY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.numberUSD}
              >
                {parseFloat(this.state.rates["TRY"]).toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-euro-sign"
                  style={{ marginRight: 5, color: "#C1CACD" }}
                ></i>
                EUR/TRY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.numberEUR}
              >
                {parseFloat(
                  this.state.rates["TRY"] * (1 / this.state.rates["EUR"])
                ).toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-pound-sign"
                  style={{ marginRight: 5, color: "#D1C5DA" }}
                ></i>
                GBP/TRY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.numberGBP}
              >
                {parseFloat(
                  this.state.rates["TRY"] * (1 / this.state.rates["GBP"])
                ).toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-coins"
                  style={{ marginRight: 5, color: "#B8860B" }}
                ></i>
                XAU/TRY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.numberXAU}
              >
                {parseFloat(
                  this.state.rates["TRY"] * (1 / this.state.rates["XAU"])
                ).toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-coins"
                  style={{ marginRight: 5, color: "#C0C0C0" }}
                ></i>
                XAG/TRY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.numberXAG}
              >
                {parseFloat(
                  this.state.rates["TRY"] * (1 / this.state.rates["XAG"])
                ).toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-coins"
                  style={{ marginRight: 5, color: "#e5e4e2" }}
                ></i>
                XPT/TRY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.numberXPT}
              >
                {parseFloat(
                  this.state.rates["TRY"] * (1 / this.state.rates["XPT"])
                ).toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

FXTable.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FXTable);
