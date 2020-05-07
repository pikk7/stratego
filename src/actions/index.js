export const FIGHT = "FIGHT";
export const MOVE = "MOVE";
export const GAME_OVER = "GAME_OVER";
export const SELECT_CELL = "SELECT_CELL";
export const SELECT_SOLDIER = "SELECT_SOLDIER";
export const GAME_STATUS_CHANGE = "GAME_STATUS_CHANGE";
//action creators
export function fight(state, attacker, defender) {
  return {
    type: FIGHT,
    payload: { state: state, attacker: attacker, defender: defender },
  };
}

export function move(state, id, x, y, clickedx, clickedy) {
  return {
    type: MOVE,
    payload: {
      state: state,
      id: id,
      x: x,
      y: y,
      clickedx: clickedx,
      clickedy: clickedy,
    },
  };
}

export function startAgain() {
  return {
    type: GAME_OVER,
  };
}

// export function selectCell(state, type, x, y) {
//   return {
//     type: SELECT_CELL,
//     payload: { state: state, type: type, currentX: x, currentY: y },
//   };
// }

export function selectSoldier(state, id, x, y) {
  return {
    type: SELECT_SOLDIER,
    payload: { state: state, id: id, selectedSoldierX: x, selectedSoldierY: y },
  };
}

export function gameStatusChange(
  state,
  status,
  currentPlayer = state.currentPlayer
) {
  return {
    type: GAME_STATUS_CHANGE,
    payload: { state: state, status: status, currentPlayer: currentPlayer },
  };
}
