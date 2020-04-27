import React from "react";
import GameField from "./GameField";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function Playing() {
  const game = useSelector((state) => state.game);
  return (
    <>
      {game.status === "playing" && (
        <>
          <strong>{game.currentPlayer} player</strong>
          <GameField cellBonus={0} type={"play"} row={6} col={6}></GameField>
        </>
      )}

      {game.status === "end" && (
        <strong>{game.currentPlayer} is the winner</strong>
      )}
    </>
  );
}

Playing.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  cellBonus: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
