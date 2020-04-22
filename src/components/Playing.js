import React from "react";
import GameField from "./GameField";
// import PropTypes from "prop-types";

// const classes = {
//   button: {
//     background: "grey",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(0,0, 0 .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//     margin: "30px",
//   },
// };
export default function Playing() {
  return (
    <>
      <GameField type={"play"} row={6} col={6}></GameField>
    </>
  );
}
// export default withStyles(classes)(PrepareGame);
