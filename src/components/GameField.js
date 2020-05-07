import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import FieldCell from "./FieldCell";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const classes = {
  table: {
    minWidth: 800,
    minHeight: 300,
  },
  cell: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    minWidth: 80,
    minHeight: 80,
  },
};
function generateTableBody(soldiers, row, col, type, cellBonus, game) {
  let items = [];
  let items2;
  let isSoldier = false;
  let sold = null;

  for (let x = cellBonus; x < row + cellBonus; x++) {
    items2 = [];

    for (let y = cellBonus; y < col + cellBonus; y++) {
      if (cellBonus || game.status) {
        // eslint-disable-next-line
        soldiers.forEach((element) => {
          if (element.y === y) {
            if (element.x === x) {
              sold = element;
              isSoldier = true;
            }
          }
        });
      }

      if (isSoldier) {
        items2.push(
          <FieldCell
            type={type}
            x={x}
            y={y}
            className={classes.cell}
            key={x + " " + y}
            lvl={sold.level}
            owner={sold.owner}
            isOwned={true}
          ></FieldCell>
        );
      } else {
        items2.push(
          <FieldCell
            type={type}
            x={x}
            y={y}
            className={classes.cell}
            key={x + " " + y}
            isOwned={false}
          ></FieldCell>
        );
      }
      sold = null;
      isSoldier = false;
    }
    items.push(<TableRow key={x}>{items2}</TableRow>);
  }
  return items;
}
function GameField(props) {
  const { classes, row, col, type, cellBonus } = props;

  const soldiers = useSelector((state) => state.soldiers);
  const game = useSelector((state) => state.game);
  const items = generateTableBody(soldiers, row, col, type, cellBonus, game);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>{items}</TableBody>
      </Table>
    </TableContainer>
  );
}
export default withStyles(classes)(GameField);
GameField.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  cellBonus: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
