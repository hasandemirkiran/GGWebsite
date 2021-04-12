import React from "react";
import { Section, SectionAlternate } from "components/organisms";
import { Faq } from "./components";

import { faq } from "./data";

const Values = () => (
  <div>
    <SectionAlternate>
      <Faq data={faq} />
    </SectionAlternate>
  </div>
);

export default Values;
