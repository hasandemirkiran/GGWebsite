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
            label="Letters of Credit"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  Letter of Credit (L/C)
                </Typography>{" "}
                is a kind of conditional bank guarantee issued upon importer’s
                request which commits that the value of the goods will be paid
                to the exporter’s bank. A letter of credit, or “credit letter”
                is a letter from a bank guaranteeing that a buyer’s payment to a
                seller will be received on time and for the correct amount. In
                the event that the buyer is unable to make a payment on the
                purchase, the bank will be required to cover the full or
                remaining amount of the purchase.
              </span>
            }
            subtitle="It protects both the exporter (seller) and the importer (buyer)."
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
