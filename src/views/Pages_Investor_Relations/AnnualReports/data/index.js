import { colors } from "@material-ui/core";

export const breadcrumb = [
  {
    href: "annual-reports",
    title: "Annual Reports",
    isActive: true,
  },
  {
    href: "financial-reports",
    title: "Financial Reports",
    isActive: false,
  },
];

export const questions = {
  title: "Faaliyet Raporları",
  subtitle: "Son yıllara ait faaliyet raporları.",
  items: [
    {
      id: "faq-1",
      title: "2020 Faaliyet Raporları",
      subtitle: "2020 faaliyet raporları detayları.",
      links: [
        {
          link: "2020 Faaliyet Raporu",
          href:
            "https://goldenglobalbank.com.tr/icerik/uploads/2021/04/2020-FAAL%C4%B0YET-RAPORU-GGB.pdf",
        },
      ],
    },
  ],
};
