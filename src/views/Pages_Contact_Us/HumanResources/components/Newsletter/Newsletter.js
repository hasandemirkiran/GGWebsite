import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { Icon } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    backgroundSize: "cover",
    borderRadius: theme.spacing(2),
  },
  textWhite: {
    color: "white",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    maxWidth: 400,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiInputAdornment-root i": {
      color: "white !important",
    },
  },
}));

const Newsletter = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <>
          <SectionHeader
            title={
              <span className={classes.textWhite}>Bültenimize Abone Olun</span>
            }
            subtitle={
              <span className={classes.textWhite}>
                Gelişmelerden haberdar olun ve en yeni haberleri kaçırmayın.
              </span>
            }
            fadeUp
          />
          <div className={classes.inputContainer}>
            <FormControl
              fullWidth
              variant="outlined"
              data-aos="fade-up"
              className={classes.formControl}
            >
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      fontIconClass="fas fa-paper-plane"
                      fontIconColor={colors.indigo[900]}
                    />
                  </InputAdornment>
                }
                placeholder="E-mailinizi giriniz"
              />
            </FormControl>
          </div>
        </>
      </Section>
    </div>
  );
};

Newsletter.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Newsletter;
