import { combineReducers } from "redux";
import soldiers from "./soldier";
import fields from "./field";
import game from "./game";

const strategoApp = combineReducers({
  soldiers,
  fields,
  game,
});

export default strategoApp;
