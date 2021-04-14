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
            label="Foreign Trade"
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  The international trade offers
                </Typography>{" "}
                numerous advantages to the companies. However, they are also
                exposed to many risks and cope with various problems while doing
                international business.
              </span>
            }
            subtitle="In order to identify effectively their
            needs and the expectations, we frequently pay visit to our
            clients and keep close relationship. Thus, our very experienced
            staff offers practical and long-lasting solutions to the risks
            and potential problems that our customers might be exposed to in
            their international business. Beside the conventional foreign trade financing products,
             we also offer Musharaqa and Mudaraba facilities to respond more effectively to the needs 
             of our customers and provide immediate support to them on each single step of their operations."
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
