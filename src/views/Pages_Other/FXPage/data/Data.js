const data = {
  currencies: [
    {
      code: "TRY",
      sellRate: 1,
      name: "Türk Lirası",
      sign: "₺",
    },
    {
      code: "USD",
      sellRate: 1 / 8.5165,
      name: "Amerikan Doları",
      sign: "$",
    },
    {
      code: "EUR",
      sellRate: (1 / 8.5165) * 0.819759,
      name: "Avrupa Para Birimi",
      sign: "€",
    },
    {
      code: "GBP",
      sellRate: (1 / 8.5165) * 0.703602,
      name: "İngiliz Sterlini",
      sign: "£",
    },
    {
      code: "XAU",
      sellRate: (1 / 8.5165) * 0.00052695,
      name: "Altın",
      sign: "",
    },
    {
      code: "XAG",
      sellRate: (1 / 8.5165) * 0.00052695,
      name: "Gümüş",
      sign: "",
    },
  ],
};

export default data;