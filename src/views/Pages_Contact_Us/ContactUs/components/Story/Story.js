import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}));

const Story = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <div>
            <SectionHeader
              title="Kurumsal"
              subtitle="Bankacılık ve uluslararası ticaret alanındaki profesyonel yöneticilik ve girişimci kimlikleriyle üst düzey tecrübeye sahip ortaklar tarafından, ağırlıklı olarak dış ticaret firmalarına bankacılık hizmetleri ve alternatif finansman yöntemleri sunmak amacıyla kurulan Golden Global Bank; tüm faaliyetlerini faizsiz finans prensiplerine uygun şekilde icra eden ülkemizdeki ilk ve tek yatırım bankasıdır.

              BDDK tarafından 29.05.2019 tarihinde kuruluş izni verilen Golden Global Bank; faizsiz finans prensipleri çerçevesinde, müşterilerinin ihtiyaçlarına pratik ve kalıcı çözümler sunarak Türkiye’de ve bölgesinde lider yatırım bankalarının arasına girme hedefiyle yola çıkmıştır.
              
              Golden Global Bank, ülkemizin gelecek vizyonuna duyduğu güven ve İstanbul’un ticari ve finansal kimliğiyle uyumlu şekilde üstleneceği Uluslararası Finans Merkezi rolüne olan inancıyla;
              
              Yakın coğrafyamız başta olmak üzere, hedef pazarlardaki dış ticaretin bankacılık hizmetlerine odaklanarak ülkemiz dış ticaret hacminin artırılmasına,
              
              Yurtiçi ve yurtdışında farklı kaynaklardan sağladığı fonlarla para ve sermaye piyasalarının derinleşmesine,
              
              Ülkemizdeki stratejik yatırım projelerinin finansmanına ve yakın coğrafyamızdaki potansiyel yatırımlardan ülkemiz müteşebbislerinin de faydalanabilmesine,
              
              Katkı sağlamayı hedeflemektedir.
              
              Bu doğrultuda, her biri kendi alanında uzmanlaşmış ve Golden Global Bank’ın iş modeline değer katan çalışanlarımızla, çözüm ortaklarımızla ve tüm paydaşlarımızla çalışmaya devam edeceğiz."
              align="left"
              disableGutter
              subtitleProps={{
                color: "textPrimary",
                variant: "body1",
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? "flex-end" : "flex-start"}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/working-on-sofa.svg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
