import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

import { SectionHeader, OverlapedImages } from "components/molecules";

//import images
import image1 from "../../../../../../assets/images/logo/horizontalLightBlack.png";
import image2 from "../../../../../../assets/images/logo/horizontalLightGold.png";
import image3 from "../../../../../../assets/images/logo/horizontalLightRed.png";

const Process = (props) => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <SectionHeader
            label="Letters of Guarantee"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  A guarantee document
                </Typography>{" "}
                issued in favor of both domestic and foreign physical person or
                legal entity to ensure that the Bank will effect payment to the
                beneficiary for the sum guaranteed in case the conditions are
                not met in certain circumstances such as completion of work,
                provision of goods or payment of debt.
              </span>
            }
            subtitle="TThe L/Gs can be issued in Turkish Lira or in Foreign Currencies. They will positively contribute to your business volume and profitability by increasing your reliability vis-à-vis the physical persons and the legal entities."
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
