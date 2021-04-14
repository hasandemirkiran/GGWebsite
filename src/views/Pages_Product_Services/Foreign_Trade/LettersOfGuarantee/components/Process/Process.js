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
            label="Letter of Guarantee"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  A Letter of Guarantee/Standby
                </Typography>{" "}
                L/C is an irrevocable written undertaking ensuring that the Bank
                will unconditionally effect payment to domestic or foreign
                official institutions, agencies or other natural and legal
                entities on their first written demand for the sum guaranteed in
                case of conditions are not met in certain circumstances such as
                completion of work, supply of goods or payment of debt.
              </span>
            }
            subtitle="The transactions might be against letter of credit, documents or goods and the maturity is freely determined between importer and exporter without any time constraint. The payment is made at maturity specified in the bill."
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
