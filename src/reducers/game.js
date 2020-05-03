import {
  GAME_OVER,
  SELECT_CELL,
  SELECT_SOLDIER,
  GAME_STATUS_CHANGE,
  MOVE,
  FIGHT,
} from "../actions";

export const gameData = {
  currentPlayer: "1",
  currentX: null,
  currentY: null,
  status: null,
  col: 6,
  row: 6,
  attacker: "",
  defender: "",
  playerOneGraveyard: [],
  playerTwoGraveyard: [],
};

const game = (state = gameData, action) => {
  const { type, payload } = action;

  switch (type) {
    case GAME_OVER:
      return gameOver(gameData);
    case SELECT_CELL:
      return selectCell(
        state,
        payload.type,
        payload.currentX,
        payload.currentY
      );
    case SELECT_SOLDIER:
      return selectSoldier(state, payload.id);
    case GAME_STATUS_CHANGE:
      return gameStatusChange(state, payload.status);
    case MOVE:
      return gameMove(state);
    case FIGHT:
      return gameFight(state, payload.attacker, payload.defender);
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

function gameStatusChange(state, status) {
  return Object.assign({}, state, {
    status: status,
    defender: "",
    attacker: "",
  });
}

function gameMove(state) {
  if (state.status === "prepare") {
    return Object.assign({}, state, {
      id: "",
    });
  } else {
    return Object.assign({}, state, {
      id: "",
      currentPlayer: ((state.currentPlayer % 2) + 1).toString(),
    });
  }
}

function gameFight(state, attacker, defender) {
  /**
   * TODO: a specialis karakterek lekezelese
   */
  let die1 = null;
  let die2 = null;
  if (state.currentPlayer === "1") {
    if (attacker.level > defender.level) {
      die2 = defender;
    } else if (attacker.level < defender.level) {
      die1 = attacker;
    } else {
      die1 = attacker;
      die2 = defender;
    }
  } else {
    if (attacker.level > defender.level) {
      die1 = defender;
    } else if (attacker.level < defender.level) {
      die2 = attacker;
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
      status: "fighting",
      currentPlayer: ((state.currentPlayer % 2) + 1).toString(),
      playerOneGraveyard: [...state.playerOneGraveyard, die1],
      playerTwoGraveyard: [...state.playerTwoGraveyard, die2],
    });
  } else if (die2) {
    return Object.assign({}, state, {
      attacker: attacker,
      defender: defender,
      id: "",
      status: "fighting",
      currentPlayer: ((state.currentPlayer % 2) + 1).toString(),
      playerTwoGraveyard: [...state.playerTwoGraveyard, die2],
    });
  } else if (die1) {
    return Object.assign({}, state, {
      attacker: attacker,
      defender: defender,
      id: "",
      status: "fighting",
      currentPlayer: ((state.currentPlayer % 2) + 1).toString(),
      playerOneGraveyard: [...state.playerOneGraveyard, die1],
    });
  }
}

export default game;
