import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const SelectCurrency = ({ currencies, onSelectCurrency }) => {
  const filteredCurrencies = currencies.filter(
    (currency) => currency.code !== "AUD"
  );

  return (
    <TextField
      id="standard-select-currency"
      select
      label="Döviz Çeşiti"
      onChange={(e) => onSelectCurrency(e.target.value)}
      helperText="Döviz cinsini giriniz."
    >
      {filteredCurrencies.map((currency) => {
        const { code, name } = currency;
        return (
          //   <option key={code} value={code}>
          //     {name}
          //   </option>
          <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

SelectCurrency.propTypes = {
  currencies: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default SelectCurrency;
