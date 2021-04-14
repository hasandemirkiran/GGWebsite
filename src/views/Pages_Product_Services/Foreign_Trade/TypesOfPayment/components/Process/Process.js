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
            label="Advance Payment"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  The buyer
                </Typography>{" "}
                pays the value of the goods before the shipment. In this case,
                the importer is exposed to non-shipment risk.
              </span>
            }
            subtitle="Thus, the buyer should know the seller very well and there should be a 100% trust to the seller."
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

      <Grid container spacing={4} style={{ marginTop: "2rem" }}>
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
        <Grid item xs={12} sm={12} md={6}>
          <SectionHeader
            label="Cash Against Goods"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  The payment
                </Typography>{" "}
                is effected after the goods are delivered to the address
                designated in the sales contract. the exporter is exposed to
                non-payment risk.
              </span>
            }
            subtitle="Thus, the seller should know the buyer very well and there should be a 100% trust to the buyer."
            align="left"
            disableGutter
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{ marginTop: "2rem" }}>
        <Grid item xs={12} sm={12} md={6}>
          <SectionHeader
            label="Cash against documents & Cash Against Documents with Acceptance Loan."
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  The documents
                </Typography>{" "}
                or customer clearing operations are delivered if only the value
                of the goods is paid to the Bank. After collection and upon
                exporter’s Bank instruction, the importer’s Bank transfers the
                amount to the exporter’s Bank. If the transaction is deferred
                and based on draft acceptance, then it is called Cash Against
                Documents with Acceptance Loan.
              </span>
            }
            subtitle="A letter of credit is a commitment by a bank on behalf of the buyer (importer) or upon his instruction that payment will be made at a precise date and amount to the beneficiary (exporter), provided the terms and conditions stated in the letter of credit have been met, as evidenced by the presentation, negotiation or acceptance of specified documents."
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
