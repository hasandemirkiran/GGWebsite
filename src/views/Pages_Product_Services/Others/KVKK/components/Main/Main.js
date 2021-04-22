import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { SectionHeader, DescriptionCta } from "components/molecules";
import { CardBase } from "components/organisms";

//table imports
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(categories, type) {
  return { categories, type };
}
const rows = [
  createData("Kimlik Verisi", "Isim ve Soyisim, TCKN, VKN, Müşteri No"),
  createData("İletişim Verisi", "E-posta Adresi"),
  createData(
    "İşlem Güvenliği Verisi",
    "İnternet sitesi ziyaretinize ilişkin bağlantı/çıkış tarih (log kaydı) ve saat bilgisi, IP adresi, internet protokolü, kaynak ve hedef nokta bilgileri ile konum bilgisi"
  ),
  createData(
    "Pazarlama Verisi",
    "Kullanılabilecek çerezler vasıtasıyla elde edilen veriler"
  ),
  createData("Diğer bilgiler", "Özgeçmiş bilgileri"),
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#AF182D",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    "& .description-cta__button-group": {
      flexWrap: "nowrap",
    },
  },
  title: {
    fontWeight: "bold",
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: "white",
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: "transparent",
    borderRadius: 0,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  table: {
    minWidth: 650,
  },
}));

const Main = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <DescriptionCta
        title="Kisisel Verilerin Korunması"
        align={"left"}
        titleProps={{
          variant: "h3",
          className: classes.title,
          color: "textPrimary",
        }}
        subtitleProps={{
          color: "textPrimary",
        }}
      />
      <Divider className={classes.divider} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <SectionHeader
            title="GOLDEN GLOBAL YATIRIM BANKASI A.S. İNTERNET SİTESİ AYDINLATMA METNİ"
            subtitle="Biz GOLDEN GLOBAL YATIRIM BANKASI A.Ş. (“GGI” veya “Banka”) olarak veri sorumlusu sıfatıyla 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK” veya “Kanun”) ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ (“Tebliğ”) uyarınca ilgili mevzuat kapsamında kişisel verilerinizi işliyor aynı zamanda kanunlarda öngörülen teknik ve idari tedbirleri alarak işlediğimiz verilerin korunması için elimizden gelen tüm çabayı gösteriyoruz.

            İşbu metin ile veri sorumlusu sıfatıyla KVKK’nın 10. maddesinde belirtilen aydınlatma yükümlülüğünü yerine getirmek ve böylelikle https://goldenglobalbank.com.tr/ (“İnternet sitesi”) üzerinden gerçekleştirdiğiniz faaliyetler özelinde işlemiş olduğumuz kişisel verilerinizin hangi amaçla işleneceği, işlenen kişisel verilerinizin kimlere ve hangi amaçla aktarılabileceği, kişisel verilerinizin toplanmasının yöntemi ve hukuki sebebi ile Kanun’un 11. maddesinde sayılan haklarınızla ilgili olarak hakkında siz İnternet sitesi ziyaretçilerimizi detaylıca bilgilendirmek isteriz.
            
            ."
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
          />
          <SectionHeader
            title="1. KİSİSEL VERİLERİNİZİN TOPLANMA YÖNTEMİ"
            subtitle="Kisisel verileriniz, tamamen veya kısmen otomatik olan yollarla, Kisisel verileriniz;"
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
            disableGutter
          />

          <p>
            Kişisel verileriniz, tamamen veya kısmen otomatik olan yollarla,
            Kişisel verileriniz;
          </p>
          <ul>
            <li>Kanunlarda a&ccedil;ık&ccedil;a &ouml;ng&ouml;r&uuml;lmesi,</li>
            <li>
              Bir s&ouml;zleşmenin kurulması veya ifasıyla doğrudan doğruya
              ilgili olması kaydıyla, s&ouml;zleşmenin taraflarına ait kişisel
              verilerin işlenmesinin gerekli olması,
            </li>
            <li>
              Veri sorumlusu Bankamızın hukuki
              y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;n&uuml; yerine getirebilmesi
              i&ccedil;in zorunlu olması,
            </li>
            <li>
              Bir hakkın tesisi, kullanılması veya korunması i&ccedil;in zorunlu
              olması,
            </li>
            <li>
              İlgili kişinin temel hak ve &ouml;zg&uuml;rl&uuml;klerine zarar
              vermemek kaydıyla, veri sorumlusu Banka&rsquo;nın meşru
              menfaatleri i&ccedil;in zorunlu olması,
            </li>
            <li>A&ccedil;ık rızanızın bulunması</li>
          </ul>
          <p>
            hukuki sebeplerine dayanarak aşağıda belirtilen ama&ccedil;larla;
          </p>
          <ul>
            <li>
              Banka&rsquo;nın Genel M&uuml;d&uuml;rl&uuml;ğ&uuml;, Birimleri,
              B&ouml;lge M&uuml;d&uuml;rl&uuml;kleri ve Şubeleri aracılığı ile
              verdiğiniz bilgiler,
            </li>
            <li>
              Yine Banka&rsquo;nın iştirakleri, destek hizmeti kuruluşları,
              işbirliği yaptığı/hizmet aldığı ve verdiği/iş ilişkisi
              i&ccedil;erisinde olduğu ger&ccedil;ek ve t&uuml;zel kişiler,
              aracılık/acentelik sıfatı ile faaliyetlerini
              y&uuml;r&uuml;tt&uuml;ğ&uuml;m&uuml;z şirketler, muhabir/muhatap
              bankalar, anlaşmalı bayiler, m&uuml;şteri g&ouml;r&uuml;şmeleri,
              doğrudan satış ekiplerine yapılan başvurular, &uuml;ye işyerleri
              ve POS&rsquo;ları, piyasa istihbaratı, adli kayıtların taranması,
              SGK kayıtları, PTT,
            </li>
            <li>
              İnternet sitesinin ziyaret etmeniz; İnternet sitesi
              i&ccedil;erisinde bulunan &ccedil;erezler, m&uuml;şteri memnuniyet
              anketi ve iş başvuru formu &nbsp;ve İnternet sitesi &uuml;zerinden
              doldurulan bilgilerle
            </li>
          </ul>
          <p>
            <strong>
              <em>&lsquo;info.ggbank@goldenglobalbank.com.tr&rsquo;</em>
            </strong>
            &nbsp; aracılığıyla
          </p>
          <ul>
            <li>
              Kimlik Paylaşım Sistemi, Adres Paylaşım Sistemi, Ticaret Sicil
              Gazetesi, Tapu ve Kadastro Bilgi Sistemi, Risk Merkezi, Kredi
              Kayıt B&uuml;rosu, elektronik rehin gibi kamu kurum ve kuruluşları
              tarafından Bankamız kullanımına a&ccedil;ılan her t&uuml;rl&uuml;
              sistemler,
            </li>
            <li>Ulusal ve uluslararası otoriteler/merciler/kurumlar,</li>
            <li>
              Kamu kurum ve kuruluşları tarafından Bankamız kullanımına
              a&ccedil;ılan; Kimlik Paylaşım Sistemi, Adres Paylaşım Sistemi,
              Ticaret Sicil Gazetesi, Tapu ve Kadastro Bilgi Sistemi, Risk
              Merkezi, Kredi Kayıt B&uuml;rosu, Elektronik Rehin sistemleri,
            </li>
            <li>
              ATM, kiosk, &ouml;deme ara&ccedil;ları, internet siteleri, medya,
              sosyal medya, internet bankacılığı, mobil bankacılık, telefon
              bankacılığı, &ccedil;ağrı merkezi, mobil uygulamalar,
            </li>
            <li>
              Genel M&uuml;d&uuml;rl&uuml;k, birimler, b&ouml;lge
              m&uuml;d&uuml;rl&uuml;kleri ve şubelere ait telefonlar,
              bilgisayarlar ve kameralar,
            </li>
            <li>ATM &uuml;zerinde yer alan kameralar,</li>
            <li>
              Kayıtlı elektronik posta, elektronik tebligat, elektronik posta,
              posta, faks, kısa mesaj ve swift,
            </li>
            <li>
              Banka&rsquo;ya yapılan her t&uuml;rl&uuml; bildirimler, başvurular
              ve g&ouml;r&uuml;şmeler
            </li>
          </ul>
          <p style={{ marginBottom: "4rem" }}>
            aracılığıyla tamamen veya kısmen otomatik ya da otomatik olmayan
            yollarla yazılı, s&ouml;zl&uuml;, elektronik veya sair yollarla
            toplanmak suretiyle işlenmektedir.
          </p>

          <SectionHeader
            title="2. VERİLERİNİZ, VERİLERİNİZİN İŞLENME AMACI VE TOPLANMASININ HUKUKİ SEBEBİ"
            subtitle="Yukarıda belirtilen toplama yöntemleri ile elde ettiğimiz kişisel verileriniz aşağıdaki tabloda belirtildiği gibidir:"
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
            disableGutter
          />

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>KİŞİSEL VERİ KATEGORİLERİ</StyledTableCell>
                  <StyledTableCell> KATEGORİLERİ VERİ TİPLERİ </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.categories}</StyledTableCell>
                    <StyledTableCell>{row.type}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <p style={{ marginTop: "4rem" }}>
            Tabloda yer alan kişisel verileriniz;
          </p>
          <ul style={{ marginBottom: "4rem" }}>
            <li>
              &nbsp;M&uuml;şteri veya ziyaret&ccedil;i ilişkileri y&ouml;netim
              s&uuml;re&ccedil;lerinin y&uuml;r&uuml;t&uuml;lmesi,
              <br />
              &bull; &nbsp; &nbsp;İletişim faaliyetlerinin
              y&uuml;r&uuml;t&uuml;lmesi doğrultusunda ziyaret&ccedil;ilerimiz
              arasında isim ve soy isminizle ayırt edilebilmeniz,
              <br />
              &bull; &nbsp; &nbsp;Ger&ccedil;ekleştirdiğimiz faaliyetlerin
              mevzuata uygun y&uuml;r&uuml;t&uuml;lmesi doğrultusunda 5651
              sayılı İnternet Ortamında Yapılan Yayınların D&uuml;zenlenmesi ve
              Bu Yayınlar Yoluyla İşlenen Su&ccedil;larla M&uuml;cadele Edilmesi
              Hakkında Kanun ve ilgili mevzuatta a&ccedil;ık&ccedil;a
              &ouml;ng&ouml;r&uuml;len trafik kayıtlarını tutma
              y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;m&uuml;z&uuml;n yerine
              getirilebilmesi,
              <br />
              &bull; &nbsp; &nbsp;İnternet sitesinin daha etkili, hızlı ve kolay
              kullanımının sağlanması,
              <br />
              &bull; &nbsp; &nbsp;Hizmet ve faaliyetlerimizden faydalanabilmeniz
              i&ccedil;in gerekli &ccedil;alışmaların yapılabilmesi,
            </li>
            <li>
              Tabi olduğumuz mevzuatlar uyarınca m&uuml;şterilerimizi tanımamız
              konusundaki y&uuml;k&uuml;ml&uuml;l&uuml;klerimizi yerine
              getirebilmek i&ccedil;in kimlik ve adres tespiti başta olmak
              &uuml;zere Bankamızda işlem yapma amacınız gibi bilgilerinizin
              kaydedilmesi,
              <br />
              &bull; &nbsp; &nbsp;Veri g&uuml;venliği kapsamında t&uuml;m
              gerekli teknik ve idari tedbirleri alınması,
              <br />
              &bull; &nbsp; &nbsp; D&uuml;zenleyici ve denetleyici kurumlarla,
              resmi mercilerin talep ve denetimleri doğrultusunda gerekli
              bilgilerin temini ve idari operasyonların
              y&uuml;r&uuml;t&uuml;lmesi,
            </li>
            <li>
              Şikayet, itiraz, talep, &ouml;neri, memnuniyet gibi bildirimlerin
              sizlere daha iyi hizmet verebilmek i&ccedil;in sistemimizde kayıt
              altında tutulması,
            </li>
            <li>
              Destek hizmetleri ile y&uuml;k&uuml;ml&uuml;l&uuml;klerinin,
              m&uuml;şteri memnuniyetinin, kurumsal iletişim faaliyetlerinin,
            </li>
            <li>
              Hacim arttırmaya y&ouml;nelik tanıtım ve reklam faaliyetlerinin
              planlanması ve icrası,
            </li>
            <li>
              Size &ouml;zel satış ve pazarlama faaliyetlerinin planlanması ve
              ger&ccedil;ekleştirilmesi,
              <br />
              &bull; &nbsp; &nbsp;&Ccedil;evrimi&ccedil;i ziyaret&ccedil;i
              verilerinin ilgili mevzuat uyarınca işlenmesi gibi yasal
              d&uuml;zenlemelerin &ouml;ng&ouml;rd&uuml;ğ&uuml; ve zorunlu
              kıldığı şekilde hukuki y&uuml;k&uuml;ml&uuml;l&uuml;klerimizin
              yerine getirilmesi ama&ccedil;larıyla işlenmekte olup
              &nbsp;KVKK&rsquo;nın 5. maddesinde belirtilen; GGI&rsquo;ın hukuki
              y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;n&uuml; yerine getirebilmesi
              i&ccedil;in kişisel veri işlemesinin zorunlu olması; ilgili
              kişinin temel hak ve &ouml;zg&uuml;rl&uuml;klerine zarar vermemek
              kaydıyla GGI&rsquo;ın meşru menfaatleri i&ccedil;in kişisel veri
              işlemesinin zorunlu olması hukuki sebeplerine dayanarak
              toplanmaktadır.
            </li>
          </ul>

          <SectionHeader
            title="3. KİŞİSEL VERİLERİNİZİN AKTARILDIĞI KİŞİLER VE AKTARIM AMACI"
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
            disableGutter
          />

          <p style={{ marginTop: "1rem" }}>Kişisel verileriniz;</p>
          <ol>
            <li>
              a) &nbsp; &nbsp;Hukuki y&uuml;k&uuml;ml&uuml;l&uuml;klerimizi
              yerine getirebilmemiz amacıyla; hukuka ve usule uygun olması
              koşuluyla d&uuml;zenleyici ve denetleyici kurumlar ile mahkeme ve
              icra m&uuml;d&uuml;rl&uuml;kleri gibi ilgili resm&icirc; kurumlara
              ve kişisel verilerinizi talep etmeye yetkili olan diğer kamu kurum
              veya kuruluşlarına,
            </li>
            <li>
              b) &nbsp; &nbsp;Vekil ve temsilcilerinize ilettiğiniz
              taleplerinizin yerine getirilmesi adına; tarafınızca yetki
              verilmiş vekil ve temsilcilerinize
            </li>
            <li>
              c) &nbsp; &nbsp;İş s&uuml;re&ccedil;lerimizi hukuka ve diğer meşru
              menfaatlerimize uygun y&uuml;r&uuml;tebilmemiz, olası bir yargı
              s&uuml;recinde savunma hakkımızı kullanabilmemiz amacıyla;
              avukatlara, denet&ccedil;ilere, vergi danışmanları ile danışmanlık
              hizmeti aldığımız diğer &uuml;&ccedil;&uuml;nc&uuml; kişilere,
            </li>
          </ol>
          <p style={{ marginBottom: "4rem" }}>
            KVKK&rsquo;nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme
            şartları ve ama&ccedil;ları dahilinde aktarılabilmektedir.
          </p>

          <SectionHeader
            title="4. KİŞİSEL VERİLERİNİZE İLİŞKİN HAKLARINIZ"
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
            disableGutter
          />

          <p style={{ marginTop: "1rem" }}>
            Kişisel verilerinizle ilgili olarak;
            <br />
            a) &nbsp; &nbsp;Kişisel verilerinizin işlenip işlenmediğini
            &ouml;ğrenme,
            <br />
            b) &nbsp; &nbsp;Kişisel verileriniz işlenmişse buna ilişkin bilgi
            talep etme,
            <br />
            c) &nbsp; &nbsp;Kişisel verilerinizin işlenme amacını ve bunların
            amacına uygun kullanılıp kullanılmadığını &ouml;ğrenme,
            <br />
            &ccedil;) &nbsp; &nbsp;Kişisel verilerinizin yurt i&ccedil;inde veya
            yurt dışında aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişileri
            bilme,
            <br />
            d) &nbsp; &nbsp;Kişisel verilerinizin eksik veya yanlış işlenmiş
            olması h&acirc;linde bunların d&uuml;zeltilmesini isteme,
            <br />
            e) &nbsp; &nbsp;KVKK&rsquo;nın 7. maddesinde
            &ouml;ng&ouml;r&uuml;len şartlar &ccedil;er&ccedil;evesinde kişisel
            verilerin silinmesini veya yok edilmesini isteme,
            <br />
            f) &nbsp; &nbsp;(d) ve (e) bentleri uyarınca yapılan işlemlerin
            kişisel verilerin aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişilere
            bildirilmesini isteme,
            <br />
            g) &nbsp; &nbsp;İşlenen verilerinizin m&uuml;nhasıran otomatik
            sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir
            sonucun ortaya &ccedil;ıkmasına itiraz etme,
            <br />
            ğ) &nbsp; &nbsp;Kişisel verilerinizin kanuna aykırı olarak işlenmesi
            sebebiyle zarar uğramanız halinde, zararınızın giderilmesini talep
            etme
            <br />
            haklarına sahipsiniz.
          </p>
          <p>&nbsp;</p>
          <p style={{ marginBottom: "4rem" }}>
            Belirtilen haklarınız kapsamında taleplerinizi, iadeli
            taahh&uuml;tl&uuml; mektup aracılığıyla, şahsen, noter aracılığıyla
            yazılı olarak, kayıtlı elektronik posta (KEP) adresi, g&uuml;venli
            elektronik imza, mobil imza ya da daha &ouml;nce bize bildirdiğiniz
            ve sistemimizde kayıtlı bulunan elektronik posta adresiniz var ise
            elektronik posta adresinizi kullanmak suretiyle veya başvuru amacına
            y&ouml;nelik geliştirilmiş bir yazılım veya uygulama vasıtasıyla
            bize ulaşarak iletebilirsiniz. Talepleriniz, belirtilen yollar
            aracılığıyla bize ulaştırılmasından itibaren en ge&ccedil; otuz
            g&uuml;n i&ccedil;inde &uuml;cretsiz olarak
            sonu&ccedil;landırılacaktır.
            <br />
            Kişisel Verileri Koruma Kurumu tarafından 10 Mart 2018 tarihli ve
            30356 sayılı Resmi Gazete&rsquo;de yayımlanan &ldquo;Veri
            Sorumlusuna Başvuru Usul Ve Esasları Hakkında Tebliğ&rdquo;de
            belirtildiği &uuml;zere, başvurunuzda yer alan talepleriniz
            &uuml;cretsiz olarak cevaplandırılacaktır; ancak, başvurunuza
            cevabın yazılı olarak verilmesi halinde ilk on sayfa &uuml;zerindeki
            her sayfa i&ccedil;in 1 TL ve cevabın CD, flash bellek gibi bir
            kayıt ortamında verilmesi halinde kayıt ortamının maliyetini
            ge&ccedil;meyecek bir &uuml;cret tarafınızdan talep edilebilecektir.
            Başvurunuzun tarafımız hatasından kaynaklanması halinde &uuml;cret
            size iade edilecektir.
            <br />
            Başvurunuz KVKK&rsquo;da &ouml;ng&ouml;r&uuml;len ilgili
            h&uuml;k&uuml;mler doğrultusunda cevaplandırılacak olup başvurucunun
            doğru kişi olduğunun teyit edilmesi amacıyla GGI sizden bazı
            doğrulayıcı bilgiler talep edebilecektir; bu bilgiler yalnızca
            ger&ccedil;ek veri sahibinin kim olduğunun tespit edilmesi ve
            başvuru sonu&ccedil;larının doğru kişiyle paylaşılması adına talep
            edilecektir.
          </p>

          <SectionHeader
            title="5. İLETİŞİM BİLGİLERİ GOLDEN GLOBAL YATIRIM BANKASI A.Ş."
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
            disableGutter
          />

          <p>
            <u>Veri sorumlusu &nbsp; &nbsp; &nbsp;:</u> GOLDEN GLOBAL YATIRIM
            BANKASI A.Ş.
          </p>
          <p>
            <u>Telefon Numarası &nbsp;:</u> +90 (212) 215 26 41
          </p>
          <p>
            <u>Faks Numarası &nbsp; &nbsp; &nbsp;:</u> +90 (212) 215 26 44
          </p>
          <p>
            <u>
              E-Posta &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
            </u>{" "}
            info.ggbank@goldenglobalbank.com.tr
          </p>
          <p>
            <u>KEP (Kayıtlı Elektronik Posta) adresi:</u>{" "}
            goldenglobal@hs02.kep.tr
          </p>
          <p>
            <u>İnternet adresi &nbsp; &nbsp; &nbsp;:</u>{" "}
            https://goldenglobalbank.com.tr/
          </p>
          <p>
            <u>A&ccedil;ık adres &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</u>{" "}
            Esentepe Mh. B&uuml;y&uuml;kdere Cd. No:127 B/17 &ndash;
            Şişli/İSTANBUL
          </p>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <CardBase withShadow className={classes.cardHighlighted}>
                <SectionHeader
                  title="CCV Aydınlatma Metni"
                  ctaGroup={[
                    <Button
                      variant="contained"
                      href="https://goldenglobalbank.com.tr/kvkkbelgeler/cctvmetni.pdf"
                    >
                      İndir
                    </Button>,
                  ]}
                  disableGutter
                  align="left"
                  titleProps={{
                    variant: "h6",
                    className: classes.textWhite,
                  }}
                  subtitleProps={{
                    variant: "body1",
                    className: classes.textWhite,
                  }}
                />
              </CardBase>
            </Grid>

            <Grid item xs={12} data-aos="fade-up">
              <CardBase withShadow>
                <SectionHeader
                  title="KVKK
                  Veri Sahibi Başvuru
                  Formu"
                  titleVariant="h6"
                  ctaGroup={[
                    <Button
                      variant="contained"
                      color="primary"
                      href="https://goldenglobalbank.com.tr/kvkkbelgeler/verisahibiformu.pdf"
                    >
                      İndir
                    </Button>,
                  ]}
                  disableGutter
                  align="left"
                  subtitleProps={{
                    variant: "body1",
                  }}
                />
              </CardBase>
            </Grid>

            <Grid item xs={12} data-aos="fade-up">
              <CardBase withShadow className={classes.cardHighlighted}>
                <SectionHeader
                  title="Çalışan Adayı Aydınlatma Metni"
                  ctaGroup={[
                    <Button
                      variant="contained"
                      href="https://goldenglobalbank.com.tr/icerik/uploads/2020/07/calisan_adayi_aydinlatma_metni.pdf"
                    >
                      İndir
                    </Button>,
                  ]}
                  disableGutter
                  align="left"
                  titleProps={{
                    variant: "h6",
                    className: classes.textWhite,
                  }}
                  subtitleProps={{
                    variant: "body1",
                    className: classes.textWhite,
                  }}
                />
              </CardBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
