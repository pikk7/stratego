import React from "react";
import GameField from "./GameField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { gameStatusChange } from "../actions";

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
function onBoard(element) {
  return element.x < 10 && element.y < 10;
}
export default function PrepareGame() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const soldiers = useSelector((state) => state.soldiers);

  let allSoldiersInPlace = !soldiers.every(onBoard);
  return (
    <>
      <GameField type={"arena"} cellBonus={0} row={6} col={6}></GameField>
      <br></br>
      <GameField type={"zone"} cellBonus={10} row={2} col={8}></GameField>
      <Button
        onClick={() => dispatch(gameStatusChange(game, "playing"))}
        component={Link}
        to="/playing"
        style={classes.button}
        disabled={allSoldiersInPlace}
      >
        Ready
      </Button>
    </>
  );
}
// export default withStyles(classes)(PrepareGame);
