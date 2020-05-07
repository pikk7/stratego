import {
  fight,
  startAgain,
  move,
  selectSoldier,
  gameStatusChange,
} from "./index";
const gameState = {
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
};
const soldiers1 = [
  { id: "0", x: 99, y: 99, level: 1, steps: 1 },
  { id: "1", x: 99, y: 99, level: 0, steps: 0 },
  { id: "2", x: 99, y: 99, level: 0, steps: 0 },
  { id: "3", x: 99, y: 99, level: 6, steps: 1 },
  { id: "4", x: 99, y: 99, level: 8, steps: 1 },
];

const test1 = {
  payload: {
    attacker: { id: "3", level: 6, steps: 1, x: 99, y: 99 },
    defender: { id: "4", level: 8, steps: 1, x: 99, y: 99 },
    state: [
      { id: "0", level: 1, steps: 1, x: 99, y: 99 },
      { id: "1", level: 0, steps: 0, x: 99, y: 99 },
      { id: "2", level: 0, steps: 0, x: 99, y: 99 },
      { id: "3", level: 6, steps: 1, x: 99, y: 99 },
      { id: "4", level: 8, steps: 1, x: 99, y: 99 },
    ],
  },
  type: "FIGHT",
};
const test2 = {
  payload: {
    attacker: { id: "4", level: 8, steps: 1, x: 99, y: 99 },
    defender: { id: "3", level: 6, steps: 1, x: 99, y: 99 },
    state: [
      { id: "0", level: 1, steps: 1, x: 99, y: 99 },
      { id: "1", level: 0, steps: 0, x: 99, y: 99 },
      { id: "2", level: 0, steps: 0, x: 99, y: 99 },
      { id: "3", level: 6, steps: 1, x: 99, y: 99 },
      { id: "4", level: 8, steps: 1, x: 99, y: 99 },
    ],
  },
  type: "FIGHT",
};
const test3 = {
  type: "GAME_OVER",
};

const test4 = {
  type: "MOVE",
  payload: {
    state: soldiers1,
    id: "0",
    x: 99,
    y: 99,
    clickedx: 10,
    clickedy: 10,
  },
};

const test5 = {
  type: "SELECT_SOLDIER",
  payload: {
    state: soldiers1,
    id: "0",
    selectedSoldierX: 99,
    selectedSoldierY: 99,
  },
};
const test6 = {
  type: "GAME_STATUS_CHANGE",
  payload: {
    currentPlayer: "1",
    state: {
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
    },
    status: "end",
  },
};
test("test1 fight, defender win", () => {
  expect(
    fight(
      soldiers1,
      { id: "3", x: 99, y: 99, level: 6, steps: 1 },
      { id: "4", x: 99, y: 99, level: 8, steps: 1 }
    )
  ).toEqual(test1);
});

test("test2 fight, attacker win ", () => {
  expect(
    fight(
      soldiers1,
      { id: "4", x: 99, y: 99, level: 8, steps: 1 },
      { id: "3", x: 99, y: 99, level: 6, steps: 1 }
    )
  ).toEqual(test2);
});

test("test3 start again", () => {
  expect(startAgain()).toEqual(test3);
});

test("test4 move", () => {
  expect(move(soldiers1, "0", 99, 99, 10, 10)).toEqual(test4);
});

test("test5 select soldier", () => {
  expect(selectSoldier(soldiers1, "0", 99, 99)).toEqual(test5);
});

test("test6 game status change", () => {
  expect(gameStatusChange(gameState, "end")).toEqual(test6);
});
