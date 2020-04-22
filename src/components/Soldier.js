import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { move, selectSoldier } from "../actions";
import { useSelector, useDispatch } from "react-redux";
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
  img: {
    height: 100,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
};

// function move(x, y) {
//   //dispatch valahogy a movet osz jol van
// }

function Soldier(props) {
  const { img, level, x, y, steps, id } = props;
  // const { x, y, steps, id } = props;
  const dispatch = useDispatch();
  const soldiers = useSelector((state) => state.soldiers);

  const game = useSelector((state) => state.game);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(selectSoldier(soldiers, id));
    console.log(game);
    // console.log(x);
    // console.log(y);
    // console.log(steps);
    // console.log(id);
    // dispatch(move(soldiers, id, game.currentX, game.currentY));
  };

  return (
    <div onClick={handleClick}>
      <img style={styles.img} src={img} alt={level} />
      <strong>{level}</strong>
    </div>
  );
}

Soldier.propTypes = {
  level: PropTypes.number.isRequired,
};

export default withStyles(styles)(Soldier);
