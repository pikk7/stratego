import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HowTo from "./components/HowTo";
import NewGame from "./components/NewGame";
import JoinRoom from "./components/JoinRoom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PrepareGame from "./components/PrepareGame";
import { withStyles } from "@material-ui/core";
import Playing from "./components/Playing";
import strategoApp from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { soldiersData as soldiers } from "./reducers/soldier";
import { fieldData as fields } from "./reducers/field";
import { gameData as game } from "./reducers/game";
const classes = {
  root: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
};

const logger = createLogger({ collapsed: true });
function App(props) {
  const { classes } = props;

  const initialState = {
    soldiers: soldiers,
    fields: fields,
    game: game,
  };

  const store = createStore(
    strategoApp,
    initialState,
    composeWithDevTools(applyMiddleware(logger))
  );

  return (
    <Provider store={store}>
      <Router basename="/migmir/stratego/">
        <div className={classes.root}>
          <MenuList>
            <MenuItem component={Link} to="/">
              Főoldal
            </MenuItem>
            <MenuItem component={Link} to="/instuctions">
              Szabályzat
            </MenuItem>
            <MenuItem component={Link} to="/new-game">
              Új játék
            </MenuItem>
            <MenuItem component={Link} to="/join">
              Csatlakozás
            </MenuItem>
          </MenuList>

          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/instuctions">
              <HowTo />
            </Route>
            <Route exact path="/new-game">
              <NewGame />
            </Route>
            <Route exact path="/join">
              <JoinRoom />
            </Route>
            <Route exact path="/prepare-game">
              <PrepareGame />
            </Route>
            <Route exact path="/playing">
              <Playing />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default withStyles(classes)(App);
