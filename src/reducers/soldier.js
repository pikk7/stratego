import { FIGHT, GAME_OVER, MOVE } from "../actions";

const won = () => {
  console.log("win");
};
export const cellBonusPlayerOne = 10;
export const cellBOnusPlayerTwo = -10;
export const soldiersData = [
  {
    id: "0",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 0,
    level: 1,
    steps: 1,
    owner: "1",
  }, //kem
  {
    id: "1",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 1,
    level: 11,
    steps: 0,
    owner: "1",
  }, //bomba
  {
    id: "2",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 2,
    level: 11,
    steps: 0,
    owner: "1",
  }, //bomba
  {
    id: "3",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 3,
    level: 6,
    steps: 1,
    owner: "1",
  }, //6os
  {
    id: "4",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 4,
    level: 8,
    steps: 1,
    owner: "1",
  }, //8as
  {
    id: "5",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 5,
    level: 0,
    steps: 0,
    owner: "1",
  }, //zaszlo
  {
    id: "6",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 6,
    level: 2,
    steps: 10,
    owner: "1",
  }, //felderito
  {
    id: "7",
    x: cellBonusPlayerOne + 0,
    y: cellBonusPlayerOne + 7,
    level: 2,
    steps: 10,
    owner: "1",
  }, //felderito
  // { id: "8", x: cellBonus + 1, y: cellBonus + 0, level: 9, steps: 1 , owner:"1" },
  // { id: "9", x: cellBonus + 1, y: cellBonus + 1, level: 5, steps: 1 , owner:"1" },
  // { id: "10", x: cellBonus + 1, y: cellBonus + 2, level: 7, steps: 1 , owner:"1" },
  {
    id: "11",
    x: cellBonusPlayerOne + 1,
    y: cellBonusPlayerOne + 3,
    level: 10,
    steps: 1,
    owner: "1",
  }, //10es
  {
    id: "12",
    x: cellBonusPlayerOne + 1,
    y: cellBonusPlayerOne + 4,
    level: 3,
    steps: 1,
    owner: "1",
  }, //aknasz
  {
    id: "13",
    x: cellBonusPlayerOne + 1,
    y: cellBonusPlayerOne + 5,
    level: 3,
    steps: 1,
    owner: "1",
  }, //aknasz
  {
    id: "14",
    x: cellBonusPlayerOne + 1,
    y: cellBonusPlayerOne + 6,
    level: 4,
    steps: 1,
    owner: "1",
  }, //4es
  //innentol a player ketto, o mar a tablara felteve
  {
    id: "15",
    x: cellBOnusPlayerTwo + 0,
    y: cellBOnusPlayerTwo + 0,
    level: 1,
    steps: 1,
    owner: "2",
  }, //kem
  {
    id: "16",
    x: cellBOnusPlayerTwo + 0,
    y: cellBOnusPlayerTwo + 1,
    level: 11,
    steps: 0,
    owner: "2",
  }, //bomba
  {
    id: "17",
    x: cellBOnusPlayerTwo + 0,
    y: cellBOnusPlayerTwo + 2,
    level: 11,
    steps: 0,
    owner: "2",
  }, //bomba
  {
    id: "18",
    x: cellBOnusPlayerTwo + 0,
    y: cellBOnusPlayerTwo + 3,
    level: 6,
    steps: 1,
    owner: "2",
  }, //6os
  {
    id: "19",
    x: cellBOnusPlayerTwo + 0,
    y: cellBOnusPlayerTwo + 4,
    level: 8,
    steps: 1,
    owner: "2",
  }, //8as
  {
    id: "20",
    x: cellBOnusPlayerTwo + 0,
    y: cellBOnusPlayerTwo + 5,
    level: 0,
    steps: 0,
    owner: "2",
  }, //zaszlo
  {
    id: "21",
    x: cellBOnusPlayerTwo + 1,
    y: cellBOnusPlayerTwo + 2,
    level: 2,
    steps: 10,
    owner: "2",
  }, //felderito
  {
    id: "22",
    x: cellBOnusPlayerTwo + 1,
    y: cellBOnusPlayerTwo + 0,
    level: 2,
    steps: 10,
    owner: "2",
  }, //felderito
  // { id: "23", x: 1, y: 0, level: 9, steps: 1 , owner:"2" },
  // { id: "24", x: 1, y: 1, level: 5, steps: 1 , owner:"2" },
  // { id: "25", x: 1, y: 2, level: 7, steps: 1 , owner:"2" },
  {
    id: "26",
    x: cellBOnusPlayerTwo + 1,
    y: cellBOnusPlayerTwo + 3,
    level: 10,
    steps: 1,
    owner: "2",
  }, //10es
  {
    id: "27",
    x: cellBOnusPlayerTwo + 1,
    y: cellBOnusPlayerTwo + 4,
    level: 3,
    steps: 1,
    owner: "2",
  }, //aknasz
  {
    id: "28",
    x: cellBOnusPlayerTwo + 1,
    y: cellBOnusPlayerTwo + 5,
    level: 3,
    steps: 1,
    owner: "2",
  }, //aknasz
  {
    id: "29",
    x: cellBOnusPlayerTwo + 1,
    y: cellBOnusPlayerTwo + 1,
    level: 4,
    steps: 1,
    owner: "2",
  }, //4es
];
const soldiers = (state = soldiersData, action) => {
  const { type, payload } = action;

  switch (type) {
    case FIGHT:
      return fightFunction(state, payload.attacker, payload.defender);
    case MOVE:
      return moveSoldier(
        state,
        payload.id,
        payload.x,
        payload.y,
        payload.clickedx,
        payload.clickedy
      );
    case GAME_OVER:
      return soldiersData;
    default:
      return state;
  }
};

//state soldiers resze, es a kivalsztott katona IDja, a kivalasztott mezo x, y kkordinataja
function moveSoldier(soldiers, id, x, y, clickedx, clickedy) {
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
      //zaszlo de felesleges
      won();
    }
    soldiers.forEach(function (v, index) {
      if (v.id === defender.id) {
        soldiers.splice(index, 1);
        // console.log("tamado gyoz");
      }
    });
    soldiers = moveSoldier(soldiers, attacker.id, defender.x, defender.y);
  } else if (attacker.level < defender.level) {
    //tamado veszit NAGY RESZT
    if (attacker.level === 3 && defender.level === 11) {
      soldiers.forEach(function (v, index) {
        if (v.id === defender.id) {
          soldiers.splice(index, 1);
          // console.log("aknasz anat pucol");
        }
      });
      soldiers = moveSoldier(soldiers, attacker.id, defender.x, defender.y);
    } else if (attacker.level === 1 && defender.level === 10) {
      soldiers.forEach(function (v, index) {
        if (v.id === defender.id) {
          soldiers.splice(index, 1);
          // console.log("kem gyoz");
        }
      });
      soldiers = moveSoldier(soldiers, attacker.id, defender.x, defender.y);
    } else {
      soldiers.forEach(function (v, index) {
        if (v.id === attacker.id) {
          soldiers.splice(index, 1);
          // console.log("tamado veszit");
        }
      });
    }
  } else if (attacker.level === defender.level) {
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
    // console.log("mindektto veszit");
  }

  return soldiers;
}

export default soldiers;
