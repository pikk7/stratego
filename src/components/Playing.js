import React from "react";
import GameField from "./GameField";
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
import { Button } from "@material-ui/core";
import { gameStatusChange } from "../actions";
import { withStyles } from "@material-ui/core/styles";

const classes = {
  button: {
    background: "grey",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0,0, 0 .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "30px",
  },
  redAction: {
    background: "red",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0,0, 0 .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "30px",
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
function Playing() {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const playerOneFail = () => {
    dispatch(gameStatusChange(game, "end", "2"));
  };
  const playerTwoFail = () => {
    dispatch(gameStatusChange(game, "end", "1"));
  };

  let peopleOfPlayerOne = game.playerOneGraveyard.map((el) => el.steps > 0);
  let peopleOfPlayerTwo = game.playerTwoGraveyard.map((el) => el.steps > 0);
  let playerOneGivUp = peopleOfPlayerOne.length === 9;
  let playerTwoGivUp = peopleOfPlayerTwo.length === 9;
  return (
    <div>
      {game.status === "playing" && (
        <>
          <strong>{game.currentPlayer} player</strong>

          {game.playerOneGraveyard.length > 0 && (
            <>
              <p>Player 1 graveyard: </p>
              {game.playerOneGraveyard.map((el) => {
                return (
                  <>
                    <img
                      key={el.id}
                      alt={el.level}
                      height="75"
                      width="50"
                      src={arrayOfImg[el.level]}
                    />
                    {el.level}
                  </>
                );
              })}{" "}
            </>
          )}

          {game.playerTwoGraveyard.length > 0 && (
            <>
              <p>Player 2 graveyard: </p>

              {game.playerTwoGraveyard.map((el) => {
                return (
                  <>
                    <img
                      key={el.id}
                      alt={el.level}
                      height="75"
                      width="50"
                      src={arrayOfImg[el.level]}
                    />
                    {el.level}
                  </>
                );
              })}
            </>
          )}
          <br></br>
          <Button
            style={playerTwoGivUp ? classes.redAction : classes.button}
            disabled={game.currentPlayer === "1"}
            onClick={playerTwoFail}
          >
            Feladom
          </Button>
          <GameField cellBonus={0} type={"play"} row={6} col={6}></GameField>
          <Button
            style={playerOneGivUp ? classes.redAction : classes.button}
            disabled={game.currentPlayer === "2"}
            onClick={playerOneFail}
          >
            Feladom
          </Button>
        </>
      )}

      {game.status === "fighting" && (
        <>
          <strong>
            <img
              alt={game.attacker.level}
              height="150"
              width="100"
              src={arrayOfImg[game.attacker.level]}
            />
            Tamado: {game.attacker.level} VS
            <img
              alt={game.defender.level}
              height="150"
              width="100"
              src={arrayOfImg[game.defender.level]}
            />
            Vedekezo: {game.defender.level}
          </strong>
        </>
      )}
      {game.status === "end" && (
        <strong>Player {game.currentPlayer} is the winner</strong>
      )}
    </div>
  );
}

export default withStyles(classes)(Playing);
