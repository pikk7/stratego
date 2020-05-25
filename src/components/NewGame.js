import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { thunk_createRoom } from "../actions";
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

function NewGame(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);

  function getRoomNum() {
    dispatch(thunk_createRoom);
  }

  getRoomNum();
  return (
    <>
      <h1>A szoba kodja:</h1>
      <div>{game.roomId}</div>
      <Button component={Link} to="/prepare-game" className={classes.button}>
        Create Room
      </Button>
    </>
  );
}

export default withStyles(classes)(NewGame);
