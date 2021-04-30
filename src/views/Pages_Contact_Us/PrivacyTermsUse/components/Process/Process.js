import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

import { SectionHeader, OverlapedImages } from "components/molecules";

//import images
import image1 from "../../../../../assets/images/logo/horizontalLightBlack.png";
import image2 from "../../../../../assets/images/logo/horizontalLightGold.png";
import image3 from "../../../../../assets/images/logo/horizontalLightRed.png";

const Process = (props) => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <SectionHeader
            label="Gizlilik ve Kullanım Koşulları"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  www.goldenglobalbank.com.tr
                </Typography>{" "}
                web sitesinde (“Site”), goldenglobalbank.com.tr tarafından
                sunulan hizmetlerden yararlananlar veya herhangi bir şekilde
                Site’ye erişim sağlayan kişiler, aşağıdaki kullanım koşullarını
                kabul etmiş sayılmaktadır. Site hizmetlerinden yararlanan ve
                Site’ye erişim sağlayan kişiler, Site tarafından işbu Site
                Kullanım Koşulları hükümlerinde yapılan her değişikliği önceden
                kabul etmiş sayılmaktadır.
              </span>
            }
            subtitle=" Kullanıcılar, yalnızca hukuka uygun amaçlarla, Site üzerinde işlem yapabilirler. Kullanıcıların Site dahilinde yaptığı her işlem ve eylemdeki hukuki ve cezai sorumluluk kendilerine aittir. Kullanıcılar, Site dahilinde bulunan resimleri, metinleri, görsel ve işitsel imgeleri, dosyaları, veritabanlarını, katalogları ve listeleri çoğaltmayacaklarını, kopyalamayacaklarını, dağıtmayacaklarını, işlemeyeceklerini; gerek bu eylemleri ile gerekse başka yollarla, goldenglobalbank.com.tr ile doğrudan ve/veya dolaylı olarak rekabete girmeyeceklerini kabul, beyan ve taahhüt etmektedirler.

            Kullanıcılar, Site’yi kullanarak, goldenglobalbank.com.tr’un, diğer kullanıcıların ve üçüncü kişilerin aleyhine hiçbir faaliyette bulunmayacaklardır. Kullanıcıların işbu Site Kullanım Koşulları hükümlerine ve hukuka aykırı olarak Site üzerinde gerçekleştirdikleri faaliyetler nedeniyle üçüncü kişilerin uğradıkları veya uğrayabilecekleri zararlardan dolayı Site’nin doğrudan veya dolaylı olarak hiçbir sorumluluğu yoktur.
            
            Kullanıcılar, Site dahilinde Türk Ticaret Kanunu hükümleri uyarınca haksız rekabete yol açacak faaliyetlerde bulunmayacaklarını; Site’nin ve üçüncü kişilerin şahsi ve ticari itibarını sarsacak, kişilik haklarına tecavüz niteliği taşıyacak fiilleri gerçekleştirmeyeceklerini kabul ve taahhüt etmektedirler.
            
            Golden Global Bank tarafından Site üzerinden, Golden Global Bank’in kendi kontrolünde olan ve/veya olmayan ve başkaca üçüncü kişilerin sahip olduğu veya işlettiği başka web sitelerine ve/veya içeriklere ve/veya dosyalara erişim verilebilir. Bu erişimler sadece referans kolaylığı nedeniyle sağlanmış olup ilgili web sitesini veya işleten kişiyi desteklemek amacını veya web sitesi veya içerdiği bilgilere yönelik herhangi bir türde bir beyan veya garanti niteliğini taşımamaktadır. Site üzerindeki erişimler vasıtasıyla erişilen web siteleri, dosyalar ve içerikler, bu erişimler vasıtasıyla erişilen web sitelerinden sunulan hizmetler veya ürünler veya bunların içerikleri hakkında Site’nin herhangi bir sorumluluğu yoktur.
            
            Gizlilik: goldenglobalbank.com.tr, gerektiğinde kullanıcıların 5651 sayılı yasadan doğan hukuki yükümlülüğü sebebiyle, IP adreslerini tespit etmektedir. Kullanıcılara ait IP adreslerini ancak yürürlükteki emredici mevzuat gereğince ve/veya yetkili adli ve idari makamlardan gelecek talepler doğrultusunda açıklayacaktır.
            
            Fikri Mülkiyet Hakları: Site’nin tüm içeriği goldenglobalbank.com.tr’a veya ilgili hak sahibine aittir. Kullanıcılar, Golden Global Bank hizmetlerini, bilgilerini, telif haklarına ilişkin çalışmalarını yeniden satmak, işlemek, paylaşmak, dağıtmak, sergilemek veya başkasının Golden Global Bank’in hizmetlerine erişmesi veya kullanmasına izin vermek hakkına sahip değildirler. Kullanıcılar, işbu Site Kullanım Koşulları kapsamında,Golden Global Bank tarafından izin verilen durumlar haricinde, Golden Global Bank’ın telif haklarına ilişkin çalışmalarını çoğaltamaz, işleyemez, dağıtamaz veya bunlardan türemiş çalışmalar yapamaz veya hazırlayamaz.
            
            Site Kullanım Koşulları’nda Değişiklikler: Golden Global Bank, tamamen kendi takdirine bağlı olarak, işbu Site Kullanım Koşulları’nı herhangi bir zamanda, Site’de ilan ederek değiştirebilir. İşbu Site Kullanım Koşulları’nın değişen hükümleri, ilan edildikleri tarihte geçerlilik kazanacaktır.
            
            Yürürlülük Ve Kabul: İşbu Site Kullanım Koşulları, Golden Global Bank tarafından, Site içerisinde ilan edildiği tarihte yürürlülük kazanır. Kullanıcılar, Site’yi kullanmakla, işbu Site Kullanım Koşulları hükümlerini, kabul etmiş olmaktadırlar."
            align="left"
            disableGutter
          />
        </Grid>
        <Grid
          item
          container
          alignContent="center"
          xs={12}
          sm={12}
          md={6}
          data-aos="fade-up"
        >
          <OverlapedImages
            image1={{
              src: image1,
              srcSet: image1,
              alt: "...",
            }}
            image2={{
              src: image2,
              srcSet: image2,
              alt: "...",
            }}
            image3={{
              src: image3,
              srcSet: image3,
              alt: "...",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Process;
