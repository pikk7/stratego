import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { selectCell, selectSoldier } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import BombImg from "../img/bomb.svg";
import CaptainImg from "../img/captain.svg";
import ColonelImg from "../img/colonel.svg";
import FlagImg from "../img/flag.svg";
import GeneralyImg from "../img/general.svg";
import LieutenantImg from "../img/lieutenant.svg";
import MajorImg from "../img/major.svg";
import MarshalImg from "../img/marshal.svg";
import MinerImg from "../img/miner.svg";
import ScoutImg from "../img/scout.svg";
import SergeantImg from "../img/sergeant.svg";
import SpyImg from "../img/spy.svg";
const classes = {
  table: {
    minWidth: 800,
    minHeight: 650,
  },
  cell: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
const arrayOfImg = [
  FlagImg, //0
  SpyImg, //1
  ScoutImg, //2
  MinerImg, //3
  SergeantImg, //4
  LieutenantImg, //5
  CaptainImg, //6
  MajorImg, //7
  ColonelImg, //8
  GeneralyImg, //9
  MarshalImg, //10
  BombImg, //11
];
export default function FieldCell(props) {
  const { x, y, lvl, type } = props;
  // const { x, y, steps, id } = props;
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  const soldiers = useSelector((state) => state.soldiers);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(x);
    // console.log(y);
    let id;
    var isSelectCell = true;
    soldiers.forEach((element) => {
      if (element.x === x) {
        if (element.y === y) {
          isSelectCell = false;
          id = element.id;
        }
      }
    });
    if (isSelectCell) {
      dispatch(selectCell(fields, type, x, y));
    } else {
      dispatch(selectSoldier(soldiers, id));
    }
  };
  return (
    <TableCell onClick={handleClick} style={classes.cell}>
      {lvl !== undefined && (
        <img height="150" width="100" src={arrayOfImg[lvl]} alt={lvl} />
      )}
    </TableCell>
  );
}
