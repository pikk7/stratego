import game, { gameData } from "./game";
import * as types from "../actions";

const gameState1 = {
  currentPlayer: "1",
  currentX: null,
  currentY: null,
  selectedSoldierX: null,
  selectedSoldierY: null,
  status: "end",
  col: 6,
  row: 6,
  attacker: "",
  defender: "",
  playerOneGraveyard: [],
  playerTwoGraveyard: [],
  id: null,
};

const gameState2 = {
  currentPlayer: "1",
  currentX: null,
  currentY: null,
  selectedSoldierX: 1,
  selectedSoldierY: 1,
  status: null,
  col: 6,
  row: 6,
  attacker: "",
  defender: "",
  playerOneGraveyard: [],
  playerTwoGraveyard: [],
  id: 1,
};

const afterMove = {
  attacker: "",
  col: 6,
  currentPlayer: "2",
  currentX: null,
  currentY: null,
  defender: "",
  id: "",
  playerOneGraveyard: [],
  playerTwoGraveyard: [],
  row: 6,
  selectedSoldierX: "",
  selectedSoldierY: "",
  status: null,
};

describe("game reducer", () => {
  it("should initial state", () => {
    expect(game(undefined, gameData)).toEqual(gameData);
  });

  it("should game status change", () => {
    expect(
      game(gameData, {
        type: types.GAME_STATUS_CHANGE,
        payload: {
          status: "end",
          currentPlayer: "1",
        },
      })
    ).toEqual(gameState1);
  });

  it("should select soldier", () => {
    expect(
      game(gameData, {
        type: types.SELECT_SOLDIER,
        payload: {
          id: 1,
          selectedSoldierX: 1,
          selectedSoldierY: 1,
        },
      })
    ).toEqual(gameState2);
  });

  it("should restart", () => {
    expect(
      game(gameData, {
        type: types.GAME_OVER,
        payload: gameData,
      })
    ).toEqual(gameData);
  });

  it("should move", () => {
    expect(
      game(gameData, {
        type: types.MOVE,
        payload: gameData,
      })
    ).toEqual(afterMove);
  });

  it("should fight", () => {
    expect(
      game(gameData, {
        type: types.FIGHT,
        payload: gameData,
      })
    ).toEqual(afterMove);
  });
});
