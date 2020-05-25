import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { thunk_joinRoom } from "../actions";
import PrepareGame from "../components/PrepareGame";
const styles = {
  button: {
    background: "grey",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0,0, 0 .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "30px",
  },
  textfield: {
    margin: "30px",
  },
  floatingLabe: {
    color: "white",
  },
};
function JoinRoom(props) {
  const { classes } = props;
  const game = useSelector((state) => state.game);
  let roomId = "";
  const dispatch = useDispatch();

  const handlePrepare = () => {
    dispatch(thunk_joinRoom(roomId));
  };

  const handleTextFieldChange = (e) => {
    roomId = e.target.value;
  };

  return (
    <div>
      {game.status === "prepare" && <PrepareGame></PrepareGame>}
      {game.status !== "prepare" && (
        <div>
          <FormControl>
            <TextField
              InputLabelProps={{
                className: classes.floatingLabe,
              }}
              className={classes.textfield}
              required
              id="room-number"
              label="Szóba kód"
              variant="filled"
              onChange={handleTextFieldChange}
            ></TextField>
          </FormControl>
          <Button
            onClick={handlePrepare}
            // component={Link}
            value={roomId}
            // to="/prepare-game"
            className={classes.button}
          >
            Join Room
          </Button>
        </div>
      )}
    </div>
  );
}
export default withStyles(styles)(JoinRoom);
