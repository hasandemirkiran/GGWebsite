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

const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h3" component="span" className={classes.fontWeight900}>
      Son günlerde bazı şahısların, kendilerini{" "}
      <span className={"faizsiz"}>"Global Global Bankası"</span> çalışanı olarak
      tanıtmak suretiyle firmaları arayarak teminat mektubu, aval kredisi,
      alacak sigortası vb. ürünler kullandırdıkları yönünde tarafımıza geri
      dönüşler yapılmaktadır. GOLDEN GLOBAL YATIRIM BANKASI A.Ş. olarak,
      Bankacılık Düzenleme ve Denetleme Kurumu resmi internet sitesinde Aktif
      Kuruluşlar/Bankalar listesinde ismi bulunmayan “Global Bank” adlı
      kurum/kuruluş ile herhangi bir ilişki ya da bağımız bulunmamaktadır.&nbsp;
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
            variant: "h3",
            color: "textPrimary",
          }}
          data-aos="fade-up"
        />
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
