import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import FieldCell from "./FieldCell";
import PropTypes from "prop-types";
import { useSelector /*useDispatch */ } from "react-redux";

// import BombImg from "../img/bomb.svg";
// import CaptainImg from "../img/captain.svg";
// import ColonelImg from "../img/colonel.svg";
// import FlagImg from "../img/flag.svg";
// import GeneralyImg from "../img/general.svg";
// import LieutenantImg from "../img/lieutenant.svg";
// import MajorImg from "../img/major.svg";
// import MarshalImg from "../img/marshal.svg";
// import MinerImg from "../img/miner.svg";
// import ScoutImg from "../img/scout.svg";
// import SergeantImg from "../img/sergeant.svg";
// import SpyImg from "../img/spy.svg";

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

function GameField(props) {
  const { classes, row, col, type } = props;
  let items = [];
  let items2;
  // const fields = useSelector((state) => state.fields);
  const soldiers = useSelector((state) => state.soldiers);
  // const game = useSelector((state) => state.game);
  // const dispatch = useDispatch();
  let isSoldier = false;
  let sold;
  for (let y = 0; y < row; y++) {
    items2 = [];
    sold = null;
    isSoldier = false;

    for (let x = 0; x < col; x++) {
      if (type === "zone") {
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
          ></FieldCell>
        );
      }
    }
    items.push(<TableRow key={y}>{items2}</TableRow>);
  }
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
};
