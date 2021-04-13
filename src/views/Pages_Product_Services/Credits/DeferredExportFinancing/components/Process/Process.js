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
            label="Deferred Export Financing"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  Offers possibility to exporters
                </Typography>{" "}
                to make collection before the maturity of the export receivables
                under L/Cs or Cash against documents with acceptance credit on
                deferred payment basis.
              </span>
            }
            subtitle="Advantages of Deferred Export Financing:
            
            Exporters to collect receivables before the maturity date and to reach interest-free financing without using credit line.
            
            The Bank and Country risk will be eliminated for importer and importer’s bank."
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
