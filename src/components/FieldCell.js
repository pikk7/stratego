import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { selectSoldier, move, fight, gameStatusChange } from "../actions";
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
  selectedCell: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  freeCell: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  attackCell: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
  const getSelected =
    game.selectedSoldierX === x && game.selectedSoldierY === y;
  let getFreeCell = false;
  let getAttackCell = false;
  if (game.status === "prepare" && game.currentPlayer === "1") {
    if (x === game.row - 2 || x === game.row - 1 || x === 11 || x === 10) {
      getFreeCell = !isOwned;
    }
  }

  if (game.status === "prepare" && game.currentPlayer === "2") {
    if (x === 0 || x === 1 || x === -9 || x === -10) {
      getFreeCell = !isOwned;
    }
  }

  if (game.status === "playing") {
    if (game.id) {
      const selectedCellSoldier = soldiers.find((el) => el.id === game.id);
      //felderito kulon
      if (selectedCellSoldier.level === 2) {
        if (
          (selectedCellSoldier.x <= x + selectedCellSoldier.steps &&
            selectedCellSoldier.y === y) ||
          (selectedCellSoldier.y <= y + selectedCellSoldier.steps &&
            selectedCellSoldier.x === x) ||
          (selectedCellSoldier.x >= x - selectedCellSoldier.steps &&
            selectedCellSoldier.y === y) ||
          (selectedCellSoldier.y >= y - selectedCellSoldier.steps &&
            selectedCellSoldier.x === x)
        ) {
          if (isOwned) {
            getAttackCell = game.currentPlayer !== owner;
          }
          getFreeCell = !isOwned;
        }
      } else {
        if (
          (selectedCellSoldier.x === x + selectedCellSoldier.steps &&
            selectedCellSoldier.y === y) ||
          (selectedCellSoldier.y === y + selectedCellSoldier.steps &&
            selectedCellSoldier.x === x) ||
          (selectedCellSoldier.x === x - selectedCellSoldier.steps &&
            selectedCellSoldier.y === y) ||
          (selectedCellSoldier.y === y - selectedCellSoldier.steps &&
            selectedCellSoldier.x === x)
        ) {
          if (isOwned) {
            getAttackCell = game.currentPlayer !== owner;
          }
          getFreeCell = !isOwned;
        }
      }
    }
  }

  const manageFight = (clickedsoldier) => {
    let attacker = soldiers.find((element) => element.id === game.id);
    if (clickedsoldier.level === 0) {
      dispatch(fight(soldiers, attacker, clickedsoldier, game.roomId));
      setTimeout(() => {
        dispatch(gameStatusChange(game, "end"));
      }, 3000);
    } else {
      let clickedsoldx, clickedsoldy;
      soldiers.forEach((element) => {
        if (element.id === game.id) {
          clickedsoldx = element.x;
          clickedsoldy = element.y;
        }
      });
      let moveSold = soldiers.find((element) => element.id === game.id);

      let xCoord = Math.abs(x - clickedsoldx) <= moveSold.steps; //xCoordibataban nem mozdul tobbet mint a lepes maximuma
      let yCoord = Math.abs(y - clickedsoldy) <= moveSold.steps; //yCoordinataban nem mozdul tobbet mint a lepese
      let diagonal = x === clickedsoldx || y === clickedsoldy; //ne lepjen diagonalisan

      if (xCoord && yCoord && diagonal) {
        dispatch(fight(soldiers, attacker, clickedsoldier, game.roomId));
        setTimeout(() => {
          dispatch(gameStatusChange(game, "playing", clickedsoldier.owner));
        }, 3000);
      }
    }
  };

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
      //nem ures a mezo
      if (game.id) {
        //van kivalasztott babu
        if (clickedsoldier.owner !== game.currentPlayer) {
          //masik jatekos babujara katintott es harc
          manageFight(clickedsoldier);
        }
        if (clickedsoldier.owner === game.currentPlayer) {
          //ha nincs tamadas, de masik SAJAT babura kattint, azt a babut vallasza ki
          if (clickedsoldier.id === game.id) {
            // console.log("magamra kattintottam");
            dispatch(selectSoldier(soldiers, "", null, null));
          } else {
            dispatch(
              selectSoldier(
                soldiers,
                clickedsoldier.id,
                clickedsoldier.x,
                clickedsoldier.y
              )
            );
          }
        }
      } else {
        if (
          clickedsoldier.owner === game.currentPlayer &&
          clickedsoldier.owner === game.yourId
        ) {
          //csak az adott jatekos a sajat babujat tudja mozgatni
          dispatch(
            selectSoldier(
              soldiers,
              clickedsoldier.id,
              clickedsoldier.x,
              clickedsoldier.y
            )
          );
        }
      }
    } else {
      if (game.id) {
        let clickedsoldx, clickedsoldy;
        soldiers.forEach((element) => {
          if (element.id === game.id) {
            clickedsoldx = element.x;
            clickedsoldy = element.y;
          }
        });
        if (game.status === "prepare" && game.currentPlayer === "1") {
          //babuk elhelyezese keszulesi idoben
          if (
            x === game.row - 2 ||
            x === game.row - 1 ||
            x === 11 ||
            x === 10
          ) {
            //csak a also 2 sorba es a kezbe lehessen tenni
            dispatch(
              move(
                soldiers,
                game.id,
                x,
                y,
                clickedsoldx,
                clickedsoldy,
                game.roomId
              )
            );
          }
        }
        if (game.status === "prepare" && game.currentPlayer === "2") {
          if (x === 0 || x === 1 || x === -9 || x === -10) {
            //csak a also 2 sorba es a kezbe lehessen tenni
            dispatch(
              move(
                soldiers,
                game.id,
                x,
                y,
                clickedsoldx,
                clickedsoldy,
                game.roomId
              )
            );
          }
        } else {
          //babu mozgatas alapvetoen
          //**itt meg meg kell oldani hogy ne ugraljon at */
          let moveSold = soldiers.find((element) => element.id === game.id);

          let xCoord = Math.abs(x - clickedsoldx) <= moveSold.steps; //xCoordibataban nem mozdul tobbet mint a lepes maximuma
          let yCoord = Math.abs(y - clickedsoldy) <= moveSold.steps; //yCoordinataban nem mozdul tobbet mint a lepese
          let diagonal = x === clickedsoldx || y === clickedsoldy;
          // let inLineSoldiers = soldiers.filter(
          //   (element) => element.x === x || element.y === y
          // );
          // inLineSoldiers = inLineSoldiers.map((e) => e.id);
          // console.log(
          //   xCoord + " " + yCoord + " " + diagonal /* + " " + inLineSoldiers */
          // );
          if (xCoord && yCoord && diagonal) {
            dispatch(
              move(
                soldiers,
                game.id,
                x,
                y,
                clickedsoldx,
                clickedsoldy,
                game.roomId
              )
            );
          }
        }
      }
    }
  };
  return (
    <TableCell
      onClick={handleClick}
      style={
        getSelected
          ? classes.selectedCell
          : getAttackCell
          ? classes.attackCell
          : getFreeCell
          ? classes.freeCell
          : classes.cell
      }
    >
      {lvl !== undefined && (
        <div>
          <img
            height="150"
            width="100"
            src={game.yourId === owner ? arrayOfImg[lvl] : question}
            alt={game.yourId === owner ? lvl : "?"}
          />
          <strong>{game.yourId === owner ? lvl : "?"}</strong>
        </div>
      )}
    </TableCell>
  );
}
