import React from "react";
import { SectionHeader, DescriptionCta } from "components/molecules";

export default function FXDescription() {
  return (
    <div>
      <DescriptionCta
        title="Döviz Kurları"
        align={"left"}
        titleProps={{
          variant: "h3",
          color: "textPrimary",
        }}
        subtitleProps={{
          color: "textPrimary",
        }}
      />
    </div>
  );
}
