import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { SectionHeader, DescriptionCta } from "components/molecules";

// Tabs imports
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .description-cta__button-group": {
      flexWrap: "nowrap",
    },
  },
  title: {
    fontWeight: "bold",
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: "white",
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: "transparent",
    borderRadius: 0,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  rootTable: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Main = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <DescriptionCta
        title="İnsan Kaynakları"
        align={"left"}
        titleProps={{
          variant: "h3",
          className: classes.title,
          color: "textPrimary",
        }}
        subtitleProps={{
          color: "textPrimary",
        }}
      />
      <Divider className={classes.divider} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={12}>
          <SectionHeader
            title="İnsan Kaynakları Politikamız"
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: "textPrimary",
            }}
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
            disableGutter
          />
          <List className={classes.list}>
            {data.map((item, index) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>

          <div className={classes.rootTable}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
              style={{ minWidth: "max-content" }}
            >
              <Tab label="İşe Alım" {...a11yProps(0)} />
              <Tab label="Eğitim Politikamız" {...a11yProps(1)} />
              <Tab label="Ücret ve Yan Haklar" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div>
                <p style={{ display: "list-item", marginLeft: "1rem" }}>
                  Açık pozisyonlar belirlenip, işe alım süreci başlar.
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <p style={{ display: "list-item", marginLeft: "1rem" }}>
                Çalışanlarımızın daha geniş perspektif kazanabilmesi için
                işbaşında, çalışma arkadaşlarından farklı bilgi ve becerileri
                edinebileceği; ayrıca yurt içinde ve yurt dışındaki kurumlar
                tarafından düzenlenen, çalışanlarımızın uzmanlık alanlarındaki
                bilgi ve becerilerinin gelişimini sağlayabilecekleri eğitimlere
                katılmalarını desteklemekteyiz.
              </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <p style={{ display: "list-item", marginLeft: "1rem" }}>
                Golden Global Bank’ta çalışanlarımızın ücretleri belirlenirken,
                bankamızın stratejik hedefleri ve kurumsal değerleri
                doğrultusunda deneyim ve iş bilgisi dikkate alınmaktadır.
              </p>
              <p style={{ display: "list-item", marginLeft: "1rem" }}>
                Çalışanlarımıza ve bakmakla yükümlü olduğu aile bireylerine özel
                sağlık sigortası yapılmaktadır.
              </p>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
