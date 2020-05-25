import React from "react";
import GameField from "./GameField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { gameStatusChange } from "../actions";
import { cellBOnusPlayerTwo, cellBonusPlayerOne } from "../reducers/soldier";

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
};

function onBoardPlayerTwo(element) {
  return element.x > cellBOnusPlayerTwo && element.y > cellBOnusPlayerTwo;
}

function onBoardPlayerOne(element) {
  return element.x < cellBonusPlayerOne && element.y < cellBonusPlayerOne;
}
export default function PrepareGame() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const soldiers = useSelector((state) => state.soldiers);

  // let allSoldiersInPlace = !soldiers.every(onBoard);
  return (
    <div>
      {game.yourId === "2" && (
        <div>
          <GameField
            type={"zone"}
            cellBonus={cellBOnusPlayerTwo}
            row={2}
            col={8}
          ></GameField>
        </div>
      )}

      <br></br>
      <GameField type={"arena"} cellBonus={0} row={6} col={6}></GameField>
      <br></br>

      {game.yourId === "1" && (
        <div>
          <GameField
            type={"zone"}
            cellBonus={cellBonusPlayerOne}
            row={2}
            col={8}
          ></GameField>
        </div>
      )}

      <Button
        onClick={() => dispatch(gameStatusChange(game, "playing", "1"))}
        component={Link}
        to="/playing"
        style={classes.button}
        disabled={
          !soldiers.every(
            game.currentPlayer === "1" ? onBoardPlayerOne : onBoardPlayerTwo
          )
        }
      >
        Ready
      </Button>
    </div>
  );
}
// export default withStyles(classes)(PrepareGame);
