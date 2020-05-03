import React from "react";
import GameField from "./GameField";
import { useSelector } from "react-redux";
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
export default function Playing() {
  const game = useSelector((state) => state.game);

  return (
    <>
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
                      height="150"
                      width="100"
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
                      height="150"
                      width="100"
                      src={arrayOfImg[el.level]}
                    />
                    {el.level}
                  </>
                );
              })}
            </>
          )}
          <GameField cellBonus={0} type={"play"} row={6} col={6}></GameField>
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
        <strong>{game.currentPlayer} is the winner</strong>
      )}
    </>
  );
}
