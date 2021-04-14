import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Divider } from "@material-ui/core";
import { Topbar, Footer, Sidebar } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const pages = {
    corporate: {
      title: "Kurumsal",
      id: "corporate-pages",
      children: {
        corporateChildren: {
          groupTitle: "Kurumsal",
          pages: [
            {
              title: "Hakkimizda",
              href: "/about",
            },
            {
              title: "Vizyon ve Misyon",
              href: "/vision-mission",
            },
            {
              title: "Ortaklik Yapisi",
              href: "/partnership",
            },
            {
              title: "Yonetim Kurulu",
              href: "/board",
            },
            {
              title: "Degerlerimiz",
              href: "/values",
            },
            {
              title: "Basinda Biz",
              href: "/press",
            },
          ],
        },
      },
    },
    services: {
      title: "Urun ve Hizmetlerimiz",
      id: "services-pages",
      children: {
        credit: {
          groupTitle: "Krediler",
          pages: [
            {
              title: "Kurumsal Finansman Destegi",
              href: "/short-term-liquidity",
            },
            {
              title: "Kar-Zarar Ortakligi",
              href: "/profit-loss-partnership",
            },
            {
              title: "Ortak Yatirimlar",
              href: "/equity-partnership",
            },
            {
              title: "Vadeli Ihracat Finansmani",
              href: "/deferred-export-financing",
            },
            {
              title: "Teminat Mektuplari",
              href: "/letters-of-guarantee",
            },
            {
              title: "Kabul/Avans",
              href: "/acceptance-aval-guarantee",
            },
            {
              title: "Akreditif",
              href: "/letters-of-credit",
            },
          ],
        },
        trade: {
          groupTitle: "Dis Ticaret",
          pages: [
            {
              title: "Dis Ticaret Odeme Sekli",
              href: "/help-center",
            },
            {
              title: "Harici Garanti",
              href: "/help-center-article",
            },
            {
              title: "YP ve TL Transferleri",
              href: "/help-center-article",
            },
          ],
        },
        treasury: {
          groupTitle: "Hazine Urunleri",
          pages: [
            {
              title: "Forward-Vadeli Islemler",
              href: "/forward",
            },
            {
              title: "Doviz Islemleri",
              href: "/fx-transactions",
            },
            {
              title: "Kiymetli Maden Alim-Satim Islemleri",
              href: "/precious-metals",
            },
            {
              title: "Menkul Kiymet Islemleri",
              href: "/securities",
            },
          ],
        },
        others: {
          groupTitle: "Diger",
          pages: [
            {
              title: "Urun ve Hizmet Ucretleme",
              href: "/contact-page",
            },
            {
              title: "Sozlesme ve Bilgilendirme Formlari",
              href: "/contact-sidebar-map",
            },
            {
              title: "Musteri Memnuniyet Merkezi",
              href: "/contact-page-cover",
            },
          ],
        },
      },
    },
    investor: {
      title: "Yatirimci Iliskileri",
      id: "investor-pages",
      children: {
        investorChildren: {
          groupTitle: "Yatirimci Iliskileri",
          pages: [
            {
              title: "Faaliyet Raporlari",
              href: "/career-listing",
            },
            {
              title: "Denetim Raporlari",
              href: "/career-listing-minimal",
            },
            {
              title: "Esas Sozlesme",
              href: "/career-opening",
            },
            {
              title: "SPK Belgeleri",
              href: "/career-opening",
            },
            {
              title: "Kamuya Yapilan Aciklamalar",
              href: "/career-opening",
            },
          ],
        },
      },
    },
    contact: {
      title: "Iletisim",
      id: "contact-pages",
      children: {
        contacts: {
          groupTitle: "Iletisim",
          pages: [
            {
              title: "Yasal uyari",
              href: "/account/?pid=general",
            },
            {
              title: "Gizlilik ve Kullanim Kosullari",
              href: "/account/?pid=security",
            },
            {
              title: "Kisisel Verilerin Korunmasi",
              href: "/account/?pid=notifications",
            },
            {
              title: "Site Haritasi",
              href: "/account/?pid=billing",
            },
            {
              title: "Insan Kaynaklari",
              href: "/account/?pid=billing",
            },
            {
              title: "Bize Ulasin",
              href: "/account/?pid=billing",
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
