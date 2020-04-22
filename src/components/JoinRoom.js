import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

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

  return (
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
        ></TextField>
      </FormControl>
      <Button component={Link} to="/prepare-game" className={classes.button}>
        Prepare
      </Button>
    </div>
  );
}
export default withStyles(styles)(JoinRoom);
