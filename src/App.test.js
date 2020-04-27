import { fight } from "./actions";

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

let test1 = {
  payload: {
    attacker: { id: 3, level: 6, steps: 1, x: 99, y: 99 },
    defender: { id: 4, level: 8, steps: 1, x: 99, y: 99 },
    state: [
      { id: 0, level: 1, steps: 1, x: 99, y: 99 },
      { id: 1, level: 0, steps: 0, x: 99, y: 99 },
      { id: 2, level: 0, steps: 0, x: 99, y: 99 },
      { id: 3, level: 6, steps: 1, x: 99, y: 99 },
      { id: 4, level: 8, steps: 1, x: 99, y: 99 },
    ],
  },
  type: "FIGHT",
};
let test2 = {
  payload: {
    attacker: { id: 4, level: 8, steps: 1, x: 99, y: 99 },
    defender: { id: 3, level: 6, steps: 1, x: 99, y: 99 },
    state: [
      { id: 0, level: 1, steps: 1, x: 99, y: 99 },
      { id: 1, level: 0, steps: 0, x: 99, y: 99 },
      { id: 2, level: 0, steps: 0, x: 99, y: 99 },
      { id: 3, level: 6, steps: 1, x: 99, y: 99 },
      { id: 4, level: 8, steps: 1, x: 99, y: 99 },
    ],
  },
  type: "FIGHT",
};

test("fight, defender win", () => {
  expect(
    fight(
      soldiers1,
      { id: 3, x: 99, y: 99, level: 6, steps: 1 },
      { id: 4, x: 99, y: 99, level: 8, steps: 1 }
    )
  ).toEqual(test1);
});

test("fight, attacker win ", () => {
  expect(
    fight(
      soldiers1,
      { id: 4, x: 99, y: 99, level: 8, steps: 1 },
      { id: 3, x: 99, y: 99, level: 6, steps: 1 }
    )
  ).toEqual(test2);
});
