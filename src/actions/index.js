import io from "socket.io-client";

export const FIGHT = "FIGHT";
export const MOVE = "MOVE";
export const GAME_OVER = "GAME_OVER";
export const SELECT_CELL = "SELECT_CELL";
export const SELECT_SOLDIER = "SELECT_SOLDIER";
export const GAME_STATUS_CHANGE = "GAME_STATUS_CHANGE";
export const CREATE_ROOM = "CREATE_ROOM";
export const JOIN_ROOM = "JOIN_ROOM";

const URL = "webprogramozas.inf.elte.hu:3030";

const socket = io(URL);
//action creators
export function fight(state, attacker, defender, roomId) {
  let action = {
    type: FIGHT,
    payload: { state: state, attacker: attacker, defender: defender },
  };

  socket.emit("sync-action", roomId, action, true, (ack) => {});

  return {
    type: FIGHT,
    payload: { state: state, attacker: attacker, defender: defender },
  };
}

export function move(state, id, x, y, clickedx, clickedy, roomId) {
  let action = {
    type: MOVE,
    payload: {
      state: state,
      id: id,
      x: x,
      y: y,
      clickedx: clickedx,
      clickedy: clickedy,
    },
  };
  socket.emit("sync-action", roomId, action, true, (ack) => {});
  return {
    type: MOVE,
    payload: {
      state: state,
      id: id,
      x: x,
      y: y,
      clickedx: clickedx,
      clickedy: clickedy,
    },
  };
}

export function startAgain() {
  return {
    type: GAME_OVER,
  };
}

export function selectSoldier(state, id, x, y) {
  return {
    type: SELECT_SOLDIER,
    payload: { state: state, id: id, selectedSoldierX: x, selectedSoldierY: y },
  };
}

export function gameStatusChange(
  state,
  status,
  currentPlayer = state.currentPlayer
) {
  let action = {
    type: GAME_STATUS_CHANGE,
    payload: {
      state: state,
      status: status,
      currentPlayer: currentPlayer.toString(),
    },
  };
  if (state.status !== "prepare") {
    socket.emit("sync-action", state.roomId, action, true, (ack) => {});
  }

  return {
    type: GAME_STATUS_CHANGE,
    payload: { state: state, status: status, currentPlayer: currentPlayer },
  };
}

export const thunk_createRoom = () => {
  return (dispatch, getState) => {
    const state = getState().game;
    dispatch(startAgain());
    // console.log(state);
    socket.emit("create-room", (ack) => {
      dispatch(createRoom(state, ack.roomId));
      dispatch(gameStatusChange(state, "prepare"));
    });
  };
};

export function createRoom(state, roomId) {
  return {
    type: CREATE_ROOM,
    payload: { state: state, roomId: roomId },
  };
}

export const thunk_joinRoom = (id) => {
  return (dispatch, getState) => {
    // console.log(id);
    dispatch(startAgain());
    const state = getState().game;
    // console.log(state);
    socket.emit("join-room", id, (ack) => {
      console.log(ack);
      if (ack.status !== "ok") {
        alert(ack.message);
        return;
      } else {
        dispatch(joinRoom(state, id));
        dispatch(gameStatusChange(state, "prepare", "2"));
      }
    });

    // socket.on("action-sent", (data) => {
    //   dispatch(data.action);
    // });
  };
};

export function joinRoom(state, roomId) {
  return {
    type: JOIN_ROOM,
    payload: { state: state, roomId: roomId },
  };
}

export function listening(dispatch) {
  socket.on("action-sent", (data) => {
    dispatch(data.action);
  });
}
