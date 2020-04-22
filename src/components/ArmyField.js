import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FieldCell from "./FieldCell";
// import Soldier from "./Soldier";
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
import TableBody from "@material-ui/core/TableBody";
import { useSelector, useDispatch } from "react-redux";
import { move } from "../actions";

const classes = {
  table: {
    minWidth: 800,
    minHeight: 200,
  },
  cell: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    textAlign: "center",
  },
};
//https://en.wikipedia.org/wiki/Stratego

export default function ArmyField() {
  const x = 99;
  const y = 99;

  return (
    <TableContainer component={Paper}>
      <Table style={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={0}
              level={1}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={0}
              id={1}
              level={0}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={0}
              id={2}
              level={0}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={3}
              level={6}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={4}
              level={8}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={0}
              id={5}
              level={0}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={10}
              id={6}
              level={2}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={7}
              level={2}
              style={classes.cell}
            ></FieldCell>
          </TableRow>
          <TableRow>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={8}
              level={9}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={9}
              level={5}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={10}
              level={7}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={11}
              level={10}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={12}
              level={3}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={13}
              level={3}
              style={classes.cell}
            ></FieldCell>
            <FieldCell
              x={x}
              y={y}
              steps={1}
              id={14}
              level={4}
              style={classes.cell}
            ></FieldCell>
            <FieldCell x={x} y={y} style={classes.cell}>
              Player 1
            </FieldCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
