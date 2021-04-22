import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionAlternate: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const ArticlesOfAssociation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            href={
              "http://goldenglobalbank.com.tr/icerik/uploads/2019/12/anasozlesme.pdf"
            }
            variant="contained"
            target="blank"
            fullWidth
          >
            Ana Sözleşme Metni
          </Button>
        </Box>
      </Section>
    </div>
  );
};

export default ArticlesOfAssociation;
