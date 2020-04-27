import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { selectSoldier, move, fight } from "../actions";
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
import question from "../img/question.png";

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
  const { x, y, lvl, isOwned, owner } = props;
  const dispatch = useDispatch();
  const soldiers = useSelector((state) => state.soldiers);
  const game = useSelector((state) => state.game);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(game);

    let clickedsoldier;

    soldiers.forEach((element) => {
      if (element.x === x) {
        if (element.y === y) {
          clickedsoldier = element;
        }
      }
    });
    if (isOwned) {
      if (game.id) {
        if (clickedsoldier.owner !== game.currentPlayer) {
          let attacker = soldiers.find((element) => element.id === game.id);
          dispatch(fight(soldiers, attacker, clickedsoldier));
        }
      } else {
        dispatch(selectSoldier(soldiers, clickedsoldier.id));
      }
    } else {
      if (game.id) {
        if (game.status === "prepare") {
          if (x === game.row - 2 || x === game.row - 1) {
            dispatch(move(soldiers, game.id, x, y));
          }
        } else {
          dispatch(move(soldiers, game.id, x, y));
        }
      }
    }
  };
  return (
    <TableCell onClick={handleClick} style={classes.cell}>
      {lvl !== undefined && (
        <div>
          <img
            height="150"
            width="100"
            src={game.currentPlayer === owner ? arrayOfImg[lvl] : question}
            alt={game.currentPlayer === owner ? lvl : "?"}
          />
          <strong>{game.currentPlayer === owner ? lvl : "?"}</strong>
        </div>
      )}
    </TableCell>
  );
}
