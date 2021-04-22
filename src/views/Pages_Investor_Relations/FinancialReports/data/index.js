import { colors } from "@material-ui/core";

export const breadcrumb = [
  {
    href: "annual-reports",
    title: "Annual Reports",
    isActive: false,
  },
  {
    href: "financial-reports",
    title: "Financial Reports",
    isActive: true,
  },
];

export const questions = {
  title: "Denetim Raporları",
  subtitle: "Son yıllara ait denetim raporları.",
  items: [
    {
      id: "faq-1",
      title: "2020 Denetim Raporları",
      subtitle: "2020 denetim raporları detayları.",
      links: [
        {
          link: "Bağımsız Denetim Raporu (BDDK Solo Aralık 2020)",
          href:
            "https://goldenglobalbank.com.tr/icerik/uploads/2021/03/BDDK-Solo-Rapor-Aral%C4%B1k-2020.pdf",
        },
        {
          link: "Bağımsız Denetim Raporu (30 Eylül 2020)",
          href:
            "https://goldenglobalbank.com.tr/icerik/uploads/2020/11/BDDKSoloRaporEylul2020.pdf",
        },
        {
          link: "Bağımsız Denetim Raporu (30 Haziran 2020)",
          href:
            "https://goldenglobalbank.com.tr/icerik/uploads/2020/08/BDDK_solo_rapor_haziran_2020.pdf",
        },
      ],
    },
  ],
};
