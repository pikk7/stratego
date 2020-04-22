import { FIGHT, GAME_OVER, MOVE } from "../actions";

const won = () => {
  console.log("win");
};

export const soldiersData = [
  { id: 0, y: 0, x: 0, level: 1, steps: 1 },
  { id: 1, y: 0, x: 1, level: 11, steps: 0 },
  { id: 2, y: 0, x: 2, level: 11, steps: 0 },
  { id: 3, y: 0, x: 3, level: 6, steps: 1 },
  { id: 4, y: 0, x: 4, level: 8, steps: 0 },
  { id: 5, y: 0, x: 5, level: 0, steps: 0 },
  { id: 6, y: 0, x: 6, level: 2, steps: 10 },
  { id: 7, y: 0, x: 7, level: 2, steps: 10 },
  { id: 8, y: 1, x: 0, level: 9, steps: 1 },
  { id: 9, y: 1, x: 1, level: 5, steps: 1 },
  { id: 10, y: 1, x: 2, level: 7, steps: 1 },
  { id: 11, y: 1, x: 3, level: 10, steps: 1 },
  { id: 12, y: 1, x: 4, level: 3, steps: 1 },
  { id: 13, y: 1, x: 5, level: 3, steps: 1 },
  { id: 14, y: 1, x: 6, level: 4, steps: 1 },
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
  soldiers.map(function (el) {
    if (el.id === id) {
      el.x = x;
      el.y = y;
    }
    return el;
  });
  return soldiers;
}
//state soldiers resze, a tamado (attacker) soldier es a vedekezo(defender) soldeir
function fightFunction(soldiers, attacker, defender) {
  if (attacker.level > defender.level) {
    if (defender.level === 0) {
      soldiers.forEach(function (v, index) {
        if (v.id === attacker.id) {
          console.log("bomba robban");
          soldiers.splice(index, 1);
        }
      });
    }

    if (defender.level === -100) {
      //bomba,zaszlo
      won();
    }
    soldiers.forEach(function (v, index) {
      if (v.id === defender.id) {
        soldiers.splice(index, 1);
        console.log("tamado gyoz");
      }
    });
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
    console.log("test");
    console.log(attacker);
    console.log(defender);
    console.log(soldiers);
    let tamadoIndex;
    let vedoIndex;
    soldiers.forEach(function (v, index) {
      if (v.id === attacker.id) {
        tamadoIndex = index;
      }
      if (v.id === defender.id) {
        vedoIndex = index;
      }
    });
    console.log("mindektto veszit");
    soldiers.splice(tamadoIndex, 1);
    soldiers.splice(vedoIndex, 1);
  }

  return soldiers;
}

export default soldiers;
