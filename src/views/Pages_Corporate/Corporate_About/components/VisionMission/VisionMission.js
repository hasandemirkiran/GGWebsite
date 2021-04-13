import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import { SectionHeader } from "components/molecules";

const WhoWeAre = (props) => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Vizyon"
            subtitle="Faizsiz finans ilke ve esaslarına uygun faaliyet gösteren, bu konudaki global gelişmeleri yakından takip ederek uygulamalarına entegre eden, paydaşlarına sürekli değer katan, saygın ve öncü bir yatırım bankası olmaktır."
            disableGutter
            align="left"
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Misyon"
            subtitle="Faizsiz finans ilke ve esasları doğrultusunda, etik değerlerinin bilincinde olarak, sürekli değer yaratan faaliyetlerimizle müşteri ihtiyaçlarını etkin çözümlerle karşılayan; müşterilerine, çalışanlarına, hissedarlarına kattığı değeri sürekli arttıran, bölgemizin saygın ve etkin bir yatırım bankası olmaktır."
            disableGutter
            align="left"
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
