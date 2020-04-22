import React from "react";
import GameField from "./GameField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
export default function PrepareGame() {
  return (
    <>
      <GameField type={"arena"} row={6} col={6}></GameField>
      <br></br>
      <GameField type={"zone"} row={2} col={8}></GameField>

      <Button component={Link} to="/playing" style={classes.button}>
        Ready
      </Button>
    </>
  );
}
// export default withStyles(classes)(PrepareGame);
