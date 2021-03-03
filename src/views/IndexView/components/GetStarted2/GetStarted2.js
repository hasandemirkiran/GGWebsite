import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const GetStarted2 = ({ className, ...rest }) => {
  const classes = useStyles();
  const title = "Misyon";
  const subtitle =
    "Faizsiz finans ilke ve esasları doğrultusunda, etik değerlerinin bilincinde olarak, sürekli değer yaratan faaliyetlerimizle müşteri ihtiyaçlarını etkin çözümlerle karşılayan; müşterilerine, çalışanlarına, hissedarlarına kattığı değeri sürekli arttıran, bölgemizin saygın ve etkin bir yatırım bankası olmaktır.";
  const button = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/home"
    >
      Daha Fazla
    </Button>
  );
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        align="center"
        titleProps={{
          variant: "h2",
          color: "textPrimary",
          className: classes.fontWeight900,
        }}
        ctaGroup={[button]}
      />
    </div>
  );
};

GetStarted2.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default GetStarted2;
