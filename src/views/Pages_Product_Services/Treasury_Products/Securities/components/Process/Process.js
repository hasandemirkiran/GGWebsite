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
            label="Lease Certificates"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  Lease certificates (Sukuk)
                </Typography>{" "}
                are defined as fixed or variable income securities representing
                individual ownership interest in a portfolio of assets issued by
                an Asset Leasing Company.
              </span>
            }
            subtitle="Unlike conventional bonds, the lease certificates are asset backed and they are therefore in a preferential position over other unsecured securities."
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
            label="Investment Fund"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  Investment funds (Participation Funds)
                </Typography>{" "}
                are composed of interest-free capital and money markets
                instruments. An investment fund may include solely or jointly
                lease certificates, participation accounts (interest-free time
                deposit), precious metals, ownership interest or any other
                interest-free capital and money markets instrument.
              </span>
            }
            subtitle="You can securely make purchases, sales and transfers of Sukuk and Investment Fund (Participation Fund) through the Investment Account you will open at our bank."
            align="left"
            disableGutter
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
