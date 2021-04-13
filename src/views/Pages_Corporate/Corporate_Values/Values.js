import React from "react";
import { Divider } from "@material-ui/core";
import { Section, SectionAlternate } from "components/organisms";
import { About, Features, Hero, Jobs, Newsletter } from "./components";

import { features, jobs } from "./data";

const Values = () => (
  <div>
    <Features data={features} />
  </div>
);

export default Values;
