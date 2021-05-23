import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "./FXTable.css";
const styles = (theme) => ({
  fxHeader: {
    fontSize: 20,
    paddingLeft: "20px",
  },
  container: {
    padding: "0px!important",
    borderLeft: "6px solid #ae182d",
    background: "#eee",
    width: "100%",
  },
  root: {
    border: "5px",
    paddingLeft: "8px",
    paddingTop: "0px",
    paddingBottom: "0px!important",
    background: "#eee",
  },

  title: {
    fontSize: 13,
  },
  numberUSD: {
    fontSize: 21,
    color: "#2D3848",
  },
  numberEUR: {
    fontSize: 21,
    color: "#2D3848",
  },
  numberGBP: {
    fontSize: 21,
    color: "#2D3848",
  },
  numberXAU: {
    fontSize: 21,
    color: "#2D3848",
  },
  numberXAG: {
    fontSize: 21,
    color: "#2D3848",
  },
  numberXPT: {
    fontSize: 21,
    color: "#2D3848",
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
    const { classes } = this.props;

    return (
      <Grid container spacing={2} className={classes.container}>
        {/* <Grid item xs={12} className={classes.fxHeader}>
          Piyasa Verileri
        </Grid> */}
        <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-dollar-sign"
                  style={{ marginRight: 5, color: "#AF182D" }}
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
              <div className="percentageIncrease">
                <i className="fas fa-sort-up increaseIcon"></i>
                <p>0.78</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-euro-sign"
                  style={{ marginRight: 5, color: "#AF182D" }}
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
              <div className="percentageDecrease">
                <i className="fas fa-sort-down decreaseIcon"></i>
                <p>-0.38</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-pound-sign"
                  style={{ marginRight: 5, color: "#AF182D" }}
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
              <div className="percentageIncrease">
                <i className="fas fa-sort-up increaseIcon"></i>
                <p>1.78</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-coins"
                  style={{ marginRight: 5, color: "#AF182D" }}
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
                ).toFixed(2)}
              </Typography>
              <div className="percentageDecrease">
                <i className="fas fa-sort-down decreaseIcon"></i>
                <p>-2.78</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <div className="fxInfo">
          <Button color="primary" size="small" href="FX">
            Daha Fazla
            <i class="fas fa-plus-circle" style={{ marginLeft: "0.5rem" }}></i>
          </Button>
        </div>

        {/* <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-coins"
                  style={{ marginRight: 5, color: "#AF182D" }}
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
        </Grid> */}
        {/* <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <i
                  class="fas fa-coins"
                  style={{ marginRight: 5, color: "#AF182D" }}
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
        </Grid> */}
      </Grid>
    );
  }
}

FXTable.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FXTable);
