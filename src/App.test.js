import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import strategoApp from "./reducers";
import { FIGHT, START_AGAIN, MOVE, fight, startAgain, move } from "./actions";
import { createStore } from "redux";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const soldiers1 = [
  { id: 0, x: 99, y: 99, level: 1, steps: 1 },
  { id: 1, x: 99, y: 99, level: 0, steps: 0 },
  { id: 2, x: 99, y: 99, level: 0, steps: 0 },
  { id: 3, x: 99, y: 99, level: 6, steps: 1 },
  { id: 4, x: 99, y: 99, level: 8, steps: 1 },
];

const fields = [
  { x: 0, y: 0, isEmpty: true },
  { x: 0, y: 1, isEmpty: true },
  { x: 0, y: 2, isEmpty: true },
  { x: 0, y: 3, isEmpty: true },
  { x: 0, y: 4, isEmpty: true },
  { x: 0, y: 5, isEmpty: true },
  { x: 1, y: 0, isEmpty: true },
  { x: 1, y: 1, isEmpty: true },
  { x: 1, y: 2, isEmpty: true },
  { x: 1, y: 3, isEmpty: true },
  { x: 1, y: 4, isEmpty: true },
  { x: 1, y: 5, isEmpty: true },
  { x: 2, y: 0, isEmpty: true },
  { x: 2, y: 1, isEmpty: true },
  { x: 2, y: 2, isEmpty: true },
  { x: 2, y: 3, isEmpty: true },
  { x: 2, y: 4, isEmpty: true },
  { x: 2, y: 5, isEmpty: true },
  { x: 3, y: 0, isEmpty: true },
  { x: 3, y: 1, isEmpty: true },
  { x: 3, y: 2, isEmpty: true },
  { x: 3, y: 3, isEmpty: true },
  { x: 3, y: 4, isEmpty: true },
  { x: 3, y: 5, isEmpty: true },
  { x: 4, y: 0, isEmpty: true },
  { x: 4, y: 1, isEmpty: true },
  { x: 4, y: 2, isEmpty: true },
  { x: 4, y: 3, isEmpty: true },
  { x: 4, y: 4, isEmpty: true },
  { x: 4, y: 5, isEmpty: true },
  { x: 5, y: 0, isEmpty: true },
  { x: 5, y: 1, isEmpty: true },
  { x: 5, y: 2, isEmpty: true },
  { x: 5, y: 3, isEmpty: true },
  { x: 5, y: 4, isEmpty: true },
  { x: 5, y: 5, isEmpty: true },
];

const initialState = {
  soldiers: soldiers1,
  fields: fields,
};
const store = createStore(strategoApp, initialState);

test("fight, defender win", () => {
  store.dispatch(
    fight(
      soldiers1,
      { id: 3, x: 99, y: 99, level: 6, steps: 1 },
      { id: 4, x: 99, y: 99, level: 8, steps: 1 }
    )
  );
  expect(store.getState().soldiers.length).toBe(4);
});

test("fight, attacker win ", () => {
  store.dispatch(
    fight(
      soldiers1,
      { id: 4, x: 99, y: 99, level: 8, steps: 1 },
      { id: 3, x: 99, y: 99, level: 6, steps: 1 }
    )
  );
  expect(store.getState().soldiers.length).toBe(4);
});
