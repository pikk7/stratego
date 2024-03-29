const START_AGAIN = "START_AGAIN";
const MOVE = "MOVE";
export const fieldData = [
  { x: 0, y: 0, isOwned: false },
  { x: 0, y: 1, isOwned: false },
  { x: 0, y: 2, isOwned: false },
  { x: 0, y: 3, isOwned: false },
  { x: 0, y: 4, isOwned: false },
  { x: 0, y: 5, isOwned: false },
  { x: 1, y: 0, isOwned: false },
  { x: 1, y: 1, isOwned: false },
  { x: 1, y: 2, isOwned: false },
  { x: 1, y: 3, isOwned: false },
  { x: 1, y: 4, isOwned: false },
  { x: 1, y: 5, isOwned: false },
  { x: 2, y: 0, isOwned: false },
  { x: 2, y: 1, isOwned: false },
  { x: 2, y: 2, isOwned: false },
  { x: 2, y: 3, isOwned: false },
  { x: 2, y: 4, isOwned: false },
  { x: 2, y: 5, isOwned: false },
  { x: 3, y: 0, isOwned: false },
  { x: 3, y: 1, isOwned: false },
  { x: 3, y: 2, isOwned: false },
  { x: 3, y: 3, isOwned: false },
  { x: 3, y: 4, isOwned: false },
  { x: 3, y: 5, isOwned: false },
  { x: 4, y: 0, isOwned: false },
  { x: 4, y: 1, isOwned: false },
  { x: 4, y: 2, isOwned: false },
  { x: 4, y: 3, isOwned: false },
  { x: 4, y: 4, isOwned: false },
  { x: 4, y: 5, isOwned: false },
  { x: 5, y: 0, isOwned: false },
  { x: 5, y: 1, isOwned: false },
  { x: 5, y: 2, isOwned: false },
  { x: 5, y: 3, isOwned: false },
  { x: 5, y: 4, isOwned: false },
  { x: 5, y: 5, isOwned: false },
];

const fields = (state = fieldData, action) => {
  const { type, payload } = action;

  if (type === START_AGAIN) {
    return fieldData;
  }
  if (type === MOVE) {
    return moveSoldier(
      state,
      payload.x,
      payload.y,
      payload.clickedx,
      payload.clickedy
    );
  }
  return state;
};

function moveSoldier(fields, x, y, clickedx, clickedy) {
  return fields.map((el) => {
    if (el.x === clickedx) {
      if (el.y === clickedy)
        return Object.assign({}, el, {
          isOwned: false,
        });
    }
    if (el.x === x) {
      if (el.y === y)
        return Object.assign({}, el, {
          isOwned: true,
        });
    }
    return el;
  });
}
export default fields;
