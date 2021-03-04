import React from "react";
import PropTypes from "prop-types";
import { Grid, colors, makeStyles } from "@material-ui/core";
import { SectionHeader, IconAlternate } from "components/molecules";
import { CardBase, DescriptionListIcon } from "components/organisms";

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const data = [
  {
    icon: "fas fa-cubes",
    color: colors.red,
    title: "Döviz İslemleri",
    subtitle:
      "Yatırım ya da kur risklerinden korunma amaçlı olarak Döviz – Türk Lirası yada Döviz- Döviz (Parite) Alım Satım islemlerinizi aynı gün ya da ileri valörlü olarak, anlık güncel kurlarla bankamızda gerceklestirebilirsiniz.",
  },
  {
    icon: "fas fa-palette",
    color: colors.red,
    title: "Teminat Mektupları",
    subtitle:
      "Yurt içinde ve yurt dışında yerleşik, gerçek ve tüzel müşterilerimiz lehine bir malın teslimi, bir işin yapılması veya bir borcun ödenmesi gibi konularda muhatap kuruluşa hitaben bankamız tarafından verilen belgedir. Talebinize göre, Türk Lirası ya da Yabancı Para olarak düzenlenebilen Teminat Mektupları, iş yaptığınız resmi kurum ve kuruluşlar, diğer gerçek ve tüzel kişiler nezdindeki güvenilirliğinize katkıda bulunarak, iş hacminizin ve kârlılığınızın artmasını sağlar.",
  },
  {
    icon: "far fa-clock",
    color: colors.red,
    title: "Forward - Vadeli İslemler",
    subtitle:
      "Forward İşlemleri, piyasalarda oluşacak fiyat risklerine karşı korunmak amaçlı olarak, döviz ya da kıymetli maden dayanak varlıklarının, bugünden belirlenmiş fiyatlarla ileri bir vade için alım satımının yapıldığı sözleşmelerdir. Nakit Blokeli ya da Limitli olarak belirlenen hesabınız üzerinden, USD, EUR ve Altın başta olmak üzere, farklı döviz türleri için en güncel ve uygun fiyatlara bankamız aracılığı ile erişebilirsiniz.",
  },
  {
    icon: "fas fa-moon",
    color: colors.red,
    title: "Vadeli İhracat Finansmanı",
    subtitle:
      "İhracatçı firmaların, “vadeli akreditif ve kabul kredili vesaik mukabili ödeme” şeklinde tahsilat yöntemi kullanması durumunda; vadeli alacaklarını, vade sonunu beklemeden belirlenen komisyon ve kar payını ödeyerek, tahsil edebileceği finansman şeklidir. Vadeli İhracat finansmanı ile işletmeler; Alacak vadesini beklemeden, alacağını tahsil edebilecek, Faizsiz finans prensipleri çerçevesinde, kredi limitini kullanmadan; finansman ihtiyacını giderebilecek, İthalatçı ve aval veren banka için, banka ve ülke riskini ortadan kaldırabilecektir.",
  },
  {
    icon: "fas fa-rocket",
    color: colors.red,
    title: "Dıs Ticaret",
    subtitle:
      "Geleneksel dış ticaret finansman ürünlerinin yanında ve agırlıklı olarak, en önde gelen değerimiz faizsiz finans prensiplerinden biri olan müşareke (Ortaklık) ve müdarebe (Emek-Sermaye Ortaklıgı) gibi ürünlerle müşterilerimizin ihtiyaçlarına çözümler üretiyoruz ve dış ticaretin her safhasında destek sağlıyoruz.",
  },
  {
    icon: "fas fa-hand-holding-heart",
    color: colors.red,
    title: "Kar-Zarar Ortaklıgı",
    subtitle:
      "İsletmelerin tüm faaliyetlerinden veya belirli bir faaliyetinden ya da belirli bir malın alım satımından dogacak kar veya zarara katılmak üzere bu isletmelere fon kullandırılması islemidir. Bankamız, fon kullandırdığı işletmelerin kar ve zararına, sözleşmede belirlenen oranlarda katılır. Ortaklıklar sermaye-sermaye ve/veya emek-sermaye şeklinde kurulabilir.",
  },
];

const Features = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Hizmetlerimiz"
        fadeUp
        titleProps={{
          variant: "h3",
          color: "textPrimary",
          className: classes.fontWeight900,
        }}
      />
      <Grid container spacing={2}>
        {data.map((adv, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            md={4}
            data-aos="fade-up"
          >
            <CardBase
              liftUp
              variant="outlined"
              style={{ borderTop: `5px solid ${adv.color[300]}` }}
            >
              <DescriptionListIcon
                icon={
                  <IconAlternate
                    fontIconClass={adv.icon}
                    color={adv.color}
                    shape="circle"
                    size="small"
                  />
                }
                title={adv.title}
                subtitle={adv.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
