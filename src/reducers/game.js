import { GAME_OVER, SELECT_CELL, SELECT_SOLDIER } from "../actions";

export const gameData = {
  isFirstPlayer: true,
  currentX: null,
  currentY: null,
  status: "prepare",
};

const game = (state = gameData, action) => {
  const { type, payload } = action;

  switch (type) {
    case GAME_OVER:
      return gameOver(state);
    case SELECT_CELL:
      return selectCell(
        state,
        payload.type,
        payload.currentX,
        payload.currentY
      );
    case SELECT_SOLDIER:
      return selectSoldier(state, payload.id);
    default:
      return state;
  }
};

function selectCell(state, type, currentX, currentY) {
  return Object.assign({}, state, {
    type: type,
    currentX: currentX,
    currentY: currentY,
  });
}

function selectSoldier(state, id) {
  return Object.assign({}, state, {
    id: id,
  });
}

function gameOver(state) {
  return Object.assign({}, state, {
    gameOver: true,
  });
}
export default game;
