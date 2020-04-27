import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import HowTo from "./components/HowTo";
import NewGame from "./components/NewGame";
import JoinRoom from "./components/JoinRoom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PrepareGame from "./components/PrepareGame";
import { withStyles } from "@material-ui/core";
import Playing from "./components/Playing";
import { useSelector, useDispatch } from "react-redux";
import { gameStatusChange, startAgain } from "./actions";
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

function App(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);

  return (
    <Router>
      <div className={classes.root}>
        <MenuList>
          <MenuItem
            onClick={() => dispatch(startAgain())}
            component={Link}
            to="/"
          >
            Főoldal
          </MenuItem>
          <MenuItem component={Link} to="/instuctions">
            Szabályzat
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(gameStatusChange(game, "prepare"))}
            component={Link}
            to="/new-game"
          >
            Új játék
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(gameStatusChange(game, "prepare"))}
            component={Link}
            to="/join"
          >
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
  );
}

export default withStyles(classes)(App);
