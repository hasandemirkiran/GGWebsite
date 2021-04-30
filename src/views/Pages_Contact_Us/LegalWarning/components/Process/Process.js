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
            label="Yasal Uyarı"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  goldenglobalbank.com.tr
                </Typography>{" "}
                internet sitesinde yer alan her türlü tablo, analiz, grafik ile
                diğer bilgi ve belgeler, Golden Global Yatırım Bankası A.Ş.
                tarafından herhangi bir menfaat temin edilmeksizin sadece
                bilgilendirmek amacı ile hazırlanmış olup içeriklerin
                doğrulukları garanti edilmemektedir.
              </span>
            }
            subtitle=" Bu sebeple, bu internet
            sitesini kullananlara, bu siteden elde edilen bilgi, görüş,
            analiz ve tabloları kullanmadan önce bilgilerin doğruluğunu
            teyit etmeleri önerilmektedir. İşbu tablo, analiz, grafik ile
            diğer bilgi ve belgelere dayanılarak yapılan işlemlerden dolayı
            doğacak doğrudan ve/veya dolaylı her türlü maddi ve manevi
            zararlar ve masraflardan ve üçüncü kişilerin uğrayabilecekleri
            zararlardan dolayı Golden Global Yatırım Bankası A.Ş. ve
            çalışanları sorumlu tutulamaz. Golden Global Yatırım Bankası
            A.Ş., bu internet sitesinde yer alan bilgileri önceden haber
            vermeksizin değiştirme, tamamen ya da kısmen kaldırma ile
            internet sitesindeki bazı bölümlere erişimi sınırlandırma
            hakkına sahiptir. Mevzuatın güncellenmesi ve elektronik iletişim ortamında karşılaşılabilecek aksaklıklar sebebiyle, özellikle bilgisayarda ve sunucularda alınan otomatik ön belleğe alma durumlarında bu internet sitesindeki araçlarda ve bilgilerde gecikmeler, eksiklikler veya yanlışlıklar söz konusu olabilir. Bu sebeple, Golden Global Yatırım Bankası A.Ş. internet sitesi içeriğinde yer alan bilgilerden ve görsel malzemeden kaynaklanabilecek hatalardan, maddi veya manevi zararlardan sorumlu tutulamaz.

            goldenglobalbank.com.tr internet sitesinde yer alan bilgi, materyal ve bunların düzenlenmesi konusundaki telif hakları, Golden Global Yatırım Bankası A.Ş.’ye aittir. Bu internet sitesinin içeriğindeki üçüncü şahıslara ait materyal dışında kalan bilgi ve materyallere dair tüm telif hakları, tescilli marka, tasarım, patent ve diğer sınai mülkiyet hakları Golden Global Yatırım Bankası A.Ş.’de saklıdır."
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
