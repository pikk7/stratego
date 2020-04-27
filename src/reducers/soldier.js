import { FIGHT, GAME_OVER, MOVE } from "../actions";

const won = () => {
  console.log("win");
};
let cellBonus = 10;
export const soldiersData = [
  {
    id: "0",
    x: cellBonus + 0,
    y: cellBonus + 0,
    level: 1,
    steps: 1,
    owner: "1",
  }, //kem
  {
    id: "1",
    x: cellBonus + 0,
    y: cellBonus + 1,
    level: 11,
    steps: 0,
    owner: "1",
  }, //bomba
  {
    id: "2",
    x: cellBonus + 0,
    y: cellBonus + 2,
    level: 11,
    steps: 0,
    owner: "1",
  }, //bomba
  {
    id: "3",
    x: cellBonus + 0,
    y: cellBonus + 3,
    level: 6,
    steps: 1,
    owner: "1",
  }, //6os
  {
    id: "4",
    x: cellBonus + 0,
    y: cellBonus + 4,
    level: 8,
    steps: 0,
    owner: "1",
  }, //8as
  {
    id: "5",
    x: cellBonus + 0,
    y: cellBonus + 5,
    level: 0,
    steps: 0,
    owner: "1",
  }, //zaszlo
  {
    id: "6",
    x: cellBonus + 0,
    y: cellBonus + 6,
    level: 2,
    steps: 10,
    owner: "1",
  }, //felderito
  {
    id: "7",
    x: cellBonus + 0,
    y: cellBonus + 7,
    level: 2,
    steps: 10,
    owner: "1",
  }, //felderito
  // { id: "8", x: cellBonus + 1, y: cellBonus + 0, level: 9, steps: 1 , owner:"1" },
  // { id: "9", x: cellBonus + 1, y: cellBonus + 1, level: 5, steps: 1 , owner:"1" },
  // { id: "10", x: cellBonus + 1, y: cellBonus + 2, level: 7, steps: 1 , owner:"1" },
  {
    id: "11",
    x: cellBonus + 1,
    y: cellBonus + 3,
    level: 10,
    steps: 1,
    owner: "1",
  }, //10es
  {
    id: "12",
    x: cellBonus + 1,
    y: cellBonus + 4,
    level: 3,
    steps: 1,
    owner: "1",
  }, //aknasz
  {
    id: "13",
    x: cellBonus + 1,
    y: cellBonus + 5,
    level: 3,
    steps: 1,
    owner: "1",
  }, //aknasz
  {
    id: "14",
    x: cellBonus + 1,
    y: cellBonus + 6,
    level: 4,
    steps: 1,
    owner: "1",
  }, //4es
  //innentol a player ketto, o mar a tablara felteve
  { id: "15", x: 0, y: 0, level: 1, steps: 1, owner: "2" }, //kem
  { id: "16", x: 0, y: 1, level: 11, steps: 0, owner: "2" }, //bomba
  { id: "17", x: 0, y: 2, level: 11, steps: 0, owner: "2" }, //bomba
  { id: "18", x: 0, y: 3, level: 6, steps: 1, owner: "2" }, //6os
  { id: "19", x: 0, y: 4, level: 8, steps: 0, owner: "2" }, //8as
  { id: "20", x: 0, y: 5, level: 0, steps: 0, owner: "2" }, //zaszlo
  { id: "21", x: 1, y: 2, level: 2, steps: 10, owner: "2" }, //felderito
  { id: "22", x: 1, y: 0, level: 2, steps: 10, owner: "2" }, //felderito
  // { id: "23", x: 1, y: 0, level: 9, steps: 1 , owner:"2" },
  // { id: "24", x: 1, y: 1, level: 5, steps: 1 , owner:"2" },
  // { id: "25", x: 1, y: 2, level: 7, steps: 1 , owner:"2" },
  { id: "26", x: 1, y: 3, level: 10, steps: 1, owner: "2" }, //10es
  { id: "27", x: 1, y: 4, level: 3, steps: 1, owner: "2" }, //aknasz
  { id: "28", x: 1, y: 5, level: 3, steps: 1, owner: "2" }, //aknasz
  { id: "29", x: 1, y: 1, level: 4, steps: 1, owner: "2" }, //4es
];
const soldiers = (state = soldiersData, action) => {
  const { type, payload } = action;

  switch (type) {
    case FIGHT:
      return fightFunction(state, payload.attacker, payload.defender);
    case MOVE:
      return moveSoldier(state, payload.id, payload.x, payload.y);
    case GAME_OVER:
      return soldiersData;
    default:
      return state;
  }
};

//state soldiers resze, es a kivalsztott katona IDja, a kivalasztott mezo x, y kkordinataja
function moveSoldier(soldiers, id, x, y) {
  return soldiers.map((el) => {
    if (el.id === id) {
      return Object.assign({}, el, {
        x: x,
        y: y,
      });
    }
    return el;
  });
}
//state soldiers resze, a tamado (attacker) soldier es a vedekezo(defender) soldeir
function fightFunction(soldiers, attacker, defender) {
  if (attacker.level > defender.level) {
    if (defender.level === 0) {
      //zaszlo
      won();
    }
    soldiers.forEach(function (v, index) {
      if (v.id === defender.id) {
        soldiers.splice(index, 1);
        console.log("tamado gyoz");
      }
    });
    soldiers = moveSoldier(soldiers, attacker.id, defender.x, defender.y);
  }
  if (attacker.level < defender.level) {
    //tamado veszit
    soldiers.forEach(function (v, index) {
      if (v.id === attacker.id) {
        soldiers.splice(index, 1);
        console.log("tamado veszit");
      }
    });
  }
  if (attacker.level === defender.level) {
    // console.log("test");
    soldiers.forEach(function (v, index) {
      if (v.id === attacker.id) {
        soldiers.splice(index, 1);
      }
    });
    soldiers.forEach(function (v, index) {
      if (v.id === defender.id) {
        soldiers.splice(index, 1);
      }
    });
    console.log("mindektto veszit");
  }

  return soldiers;
}

export default soldiers;
