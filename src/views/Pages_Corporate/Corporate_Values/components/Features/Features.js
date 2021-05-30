import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

// import image
import degerImage from "../../../../../assets/images/pngdegerlerimiz.png";
import listIcon from "./value.svg";

import "./Features.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: "100%",
  },
  text: {
    color: "#af182d",
    paddingLeft: 56,
  },
  checkBox: {
    background: "transparent",
    borderRadius: 0,
  },
  title: {
    fontWeight: "bold",
    borderLeft: "6px solid #ae182d",
  },
  items: {
    fontSize: 22,
  },
}));

const Features = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className="featuresWrapper">
      <div className={className} {...rest}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Image
              className="degerImageClass"
              src={degerImage}
              srcSet={degerImage}
            />
          </Grid>
          <Grid item container alignItems="center" xs={12} md={6}>
            <Section>
              <>
                <SectionHeader
                  title="DEĞERLERİMİZ"
                  align="left"
                  data-aos="fade-up"
                  titleProps={{
                    className: clsx(classes.text, classes.title),
                  }}
                />
                <List>
                  {data.map((item, index) => (
                    <ListItem disableGutters key={index} data-aos="fade-up">
                      <ListItemAvatar>
                        <img src={listIcon} className="list-item"></img>
                      </ListItemAvatar>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        className={classes.items}
                      >
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </>
            </Section>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Features;
