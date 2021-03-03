import React from "react";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography, colors } from "@material-ui/core";
import { IconAlternate, SectionHeader } from "components/molecules";
import { DescriptionListIcon, Section } from "components/organisms";
import "./services.css";

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: "fas fa-layer-group",
    title: "Dis Ticaret",
    subtitle:
      "Yakın coğrafyamız başta olmak üzere, hedef pazarlardaki dış ticaretin bankacılık hizmetlerine odaklanarak ülkemiz dış ticaret hacminin artırılması",
  },
  {
    icon: "fab fa-sketch",
    title: "Sermaye Piyasalari",
    subtitle:
      "Yurtiçi ve yurtdışında farklı kaynaklardan sağladığı fonlarla para ve sermaye piyasalarının derinleşmesi",
  },
  {
    icon: "fas fa-code",
    title: "Guncel Teknolojiler",
    subtitle: "En guncel teknolojiler kullanilarak, yenilikci cozumler",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Tüm faaliyetlerini <span className={"faizsiz"}>faizsiz</span> finans
      prensiplerine uygun sekilde icra eden ülkemizdeki ilk ve tek yatırım
      bankası&nbsp;
    </Typography>
  );

  const subtitle =
    "Golden Global Bank; faizsiz finans prensipleri çerçevesinde, müşterilerinin ihtiyaçlarına pratik ve kalıcı çözümler sunarak Türkiye’de ve bölgesinde lider yatırım bankalarının arasına girme hedefiyle yola çıkmıştır.";

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: "h2",
            color: "textPrimary",
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={"fade-up"}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.indigo}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
