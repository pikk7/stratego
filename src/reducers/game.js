import {
  GAME_OVER,
  // SELECT_CELL,
  SELECT_SOLDIER,
  GAME_STATUS_CHANGE,
  MOVE,
  FIGHT,
  CREATE_ROOM,
  JOIN_ROOM,
} from "../actions";

export const gameData = {
  currentPlayer: "1",
  currentX: null,
  currentY: null,
  selectedSoldierX: null,
  selectedSoldierY: null,
  status: null,
  col: 6,
  row: 6,
  attacker: "",
  defender: "",
  playerOneGraveyard: [],
  playerTwoGraveyard: [],
  id: null,
  roomId: "",
  yourId: null,
};

const game = (state = gameData, action) => {
  const { type, payload } = action;

  switch (type) {
    case GAME_OVER:
      return gameOver(gameData);
    case SELECT_SOLDIER:
      return selectSoldier(
        state,
        payload.id,
        payload.selectedSoldierX,
        payload.selectedSoldierY
      );
    case GAME_STATUS_CHANGE:
      return gameStatusChange(state, payload.status, payload.currentPlayer);
    case MOVE:
      return gameMove(state);
    case FIGHT:
      return gameFight(state, payload.attacker, payload.defender);
    case CREATE_ROOM:
      return roomId(state, payload.roomId, "1");
    case JOIN_ROOM:
      return roomId(state, payload.roomId, "2");
    default:
      return state;
  }
};

// function selectCell(state, type, currentX, currentY) {
//   return Object.assign({}, state, {
//     type: type,
//     currentX: currentX,
//     currentY: currentY,
//   });
// }

function selectSoldier(state, id, x, y) {
  return Object.assign({}, state, {
    id: id,
    selectedSoldierX: x,
    selectedSoldierY: y,
  });
}

function gameOver(state) {
  return Object.assign({}, state, {});
}

function gameStatusChange(state, status, currentPlayer) {
  return Object.assign({}, state, {
    status: status,
    defender: "",
    attacker: "",
    currentPlayer: currentPlayer,
  });
}

function gameMove(state) {
  if (state.status === "prepare") {
    return Object.assign({}, state, {
      id: "",
      selectedSoldierX: "",
      selectedSoldierY: "",
    });
  } else {
    return Object.assign({}, state, {
      id: "",
      selectedSoldierX: "",
      selectedSoldierY: "",
      currentPlayer: ((state.currentPlayer % 2) + 1).toString(),
    });
  }
}

function gameFight(state, attacker, defender) {
  let die1 = null;
  let die2 = null;
  if (state.currentPlayer === "1") {
    if (attacker.level > defender.level) {
      die2 = defender;
    } else if (attacker.level < defender.level) {
      if (
        (attacker.level === 3 && defender.level === 11) ||
        (attacker.level === 1 && defender.level === 10)
      ) {
        die2 = defender;
      } else {
        die1 = attacker;
      }
    } else {
      die1 = attacker;
      die2 = defender;
    }
  } else {
    if (attacker.level > defender.level) {
      die1 = defender;
    } else if (attacker.level < defender.level) {
      if (
        (attacker.level === 3 && defender.level === 11) ||
        (attacker.level === 1 && defender.level === 10)
      ) {
        die1 = defender;
      } else {
        die2 = attacker;
      }
    } else {
      die2 = attacker;
      die1 = defender;
    }
  }

  if (die1 && die2) {
    return Object.assign({}, state, {
      attacker: attacker,
      defender: defender,
      id: "",
      selectedSoldierX: "",
      selectedSoldierY: "",
      status: "fighting",
      currentPlayer: state.currentPlayer.toString(),
      playerOneGraveyard: [...state.playerOneGraveyard, die1],
      playerTwoGraveyard: [...state.playerTwoGraveyard, die2],
    });
  } else if (die2) {
    return Object.assign({}, state, {
      attacker: attacker,
      defender: defender,
      id: "",
      selectedSoldierX: "",
      selectedSoldierY: "",
      status: "fighting",
      currentPlayer: state.currentPlayer.toString(),
      playerTwoGraveyard: [...state.playerTwoGraveyard, die2],
    });
  } else if (die1) {
    return Object.assign({}, state, {
      attacker: attacker,
      defender: defender,
      id: "",
      selectedSoldierX: "",
      selectedSoldierY: "",
      status: "fighting",
      currentPlayer: state.currentPlayer.toString(),
      playerOneGraveyard: [...state.playerOneGraveyard, die1],
    });
  }
}

function roomId(state, roomId, yourId) {
  return Object.assign({}, state, {
    roomId: roomId,
    yourId: yourId,
  });
}

export default game;
