import React from "react";
import { Section } from "components/organisms";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { PieChart } from "react-minimal-pie-chart";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ae172b",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, share, fund) {
  return { name, share, fund };
}

const rows = [
  createData("Emir KAYA", "36.00%", "54.000.000"),
  createData("Salih BERBEROGLU", "32.00%", "48.000.000"),
  createData("Ahmet Dagli", "14.00%", "21.000.000"),
  createData("Recep KABA", "14.00%", "21.000.000"),
  createData("Mustafa AKIN", "4.00%", "6.000.000"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  pieChart: {
    maxWidth: 500,
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100%",
//     width: "100%",
//   },
//   sectionPaddingTop: {
//     paddingTop: 20,
//   },
//   sectionPartners: {
//     boxShadow: "0 5px 20px 0 rgba(90, 202, 157, 0.05)",
//     "& .section-alternate__content": {
//       paddingTop: theme.spacing(5),
//       paddingBottom: theme.spacing(5),
//     },
//   },
// }));

const Partnership = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pieChart}>
        <PieChart
          data={[
            { title: "Emir KAYA", value: 36, color: "#6dd3ce" },
            { title: "Salih BERBEROGLU", value: 32, color: "#c8e9a0" },
            { title: "Ahmet DAGLI", value: 14, color: "#f7a278" },
            { title: "Recep KABA", value: 14, color: "#a13d63" },
            { title: "Mustafa AKIN", value: 4, color: "#351e29" },
          ]}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          labelStyle={{
            fontSize: "5px",
            fontFamily: "sans-serif",
          }}
        />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Pay Sahibi</StyledTableCell>
                <StyledTableCell align="right">Hisse Orani</StyledTableCell>
                <StyledTableCell align="right">
                  Sermaye Miktari(TL)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.share}</StyledTableCell>
                  <StyledTableCell align="right">{row.fund}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </div>
  );
};

export default Partnership;
