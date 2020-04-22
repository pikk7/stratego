import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

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

function getRoomNum(min, max) {
  return "#" + (Math.floor(Math.random() * (max - min)) + min);
}
function Lobby(props) {
  const { classes } = props;
  return (
    <>
      <h1>{getRoomNum(0, 999)}</h1>
      <Button component={Link} to="/prepare-game" className={classes.button}>
        Prepare
      </Button>
    </>
  );
}

export default withStyles(classes)(Lobby);
