import React from "react";
import image from "../images/cash-calculator.svg";
import data from "../data/Data.js";
import SelectCurrency from "./SelectCurrency.js";
import { TextField } from "@material-ui/core";
import "../scss/app.scss";

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate,
    };

    this.onSelectCurrency_A = this.onSelectCurrency_A.bind(this);
    this.onSelectCurrency_B = this.onSelectCurrency_B.bind(this);
  }

  onSelectCurrency_A(code) {
    console.log("selecting currency: " + code);
    const { currencies, currencyBval } = this.state;
    const currency = currencies.filter((currency) => currency.code === code);
    this.setState({
      currencyA: currency[0], // this is an array with one item
      currencyAval: currencyBval * currency[0].sellRate,
    });
  }

  onSelectCurrency_B(code) {
    console.log("selecting currency B: " + code);
    const { currencies, currencyAval } = this.state;
    const currency = currencies.filter((currency) => currency.code === code);
    this.setState({
      currencyB: currency[0], // this is an array with one item
      currencyBval: currencyAval * currency[0].sellRate,
    });
  }

  onChangeHandler(e, currency) {
    const { currencyA, currencyB } = this.state;

    if (currency === "A") {
      const newValueA = e.target.value;
      this.setState({
        currencyAval: newValueA,
        currencyBval: (newValueA * currencyB.sellRate) / currencyA.sellRate,
      });
    } else if (currency === "B") {
      const newValueB = e.target.value;
      this.setState({
        currencyAval: (newValueB / currencyB.sellRate) * currencyA.sellRate,
        currencyBval: newValueB,
      });
    }
  }

  render() {
    const {
      currencies,
      currencyA,
      currencyB,
      currencyAval,
      currencyBval,
    } = this.state;
    return (
      <div className="fx-wrapper">
        <header>
          <img src={image} />
          <h1>Döviz Çevirici</h1>
        </header>
        <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <p>
                {
                  //Select currency
                }
                <SelectCurrency
                  currencies={currencies}
                  onSelectCurrency={this.onSelectCurrency_A}
                />
              </p>
            </div>

            <div className="col-md-6 col-md-offset-3">
              <p>
                {
                  //Select currency
                }
                <SelectCurrency
                  currencies={currencies}
                  onSelectCurrency={this.onSelectCurrency_B}
                />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className={`currency-flag ${currencyA.code}`}>
                {currencyA.name}
              </h3>
              {
                //Currency A input
              }
              <div className="input-group">
                <span className="input-group-addon">{currencyA.sign}</span>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    value={parseFloat(parseFloat(currencyAval).toFixed(4))}
                    label="Tutar"
                    variant="outlined"
                    type="number"
                    onChange={(e) => {
                      this.onChangeHandler(e, "A");
                    }}
                  />
                </form>
                <span className="input-group-addon" id="basic-addon2">
                  {currencyA.code}
                </span>
              </div>
            </div>

            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag ${currencyB.code}`}>
                {currencyB.name}
              </h3>
              {
                //Currency B input
              }
              <div className="input-group">
                <span className="input-group-addon">{currencyB.sign}</span>
                <TextField
                  id="outlined-basic"
                  value={parseFloat(parseFloat(currencyBval).toFixed(4))}
                  label="Tutar"
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    this.onChangeHandler(e, "B");
                  }}
                />
                <span className="input-group-addon" id="basic-addon3">
                  {currencyB.code}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="exchange-rate">
              <p>
                <span className="exchange-rate-writing">Kambiyo Kuru</span>
                {`${currencyB.sign} ${currencyA.sellRate} ${currencyB.code}`} ={" "}
                {`${currencyA.sign} ${(1 / currencyB.sellRate).toFixed(4)} ${
                  currencyA.code
                }`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
