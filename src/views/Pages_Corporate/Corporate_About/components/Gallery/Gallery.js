import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, GridList, GridListTile } from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
}));

const Gallery = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Galerimizi İnceleyin"
        subtitle="Binlerce müşteri tarafindan güvenilen, şeffaf bankacılık. "
        data-aos="fade-up"
      />
      <GridList cellHeight={isMd ? 360 : 260} cols={4} spacing={isMd ? 24 : 8}>
        {data.map((item, index) => (
          <GridListTile key={index} cols={isMd ? item.cols : 4 || 1}>
            <Image
              {...item.image}
              alt={item.location}
              className={classes.image}
              lazyProps={{
                width: "100%",
                height: "100%",
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

Gallery.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Gallery;
