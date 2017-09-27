// ### actions.js ###
const USER_SELECTED = "USER_SELECTED";
const ADD_USER = "ADD_USER";

export function selectUser(user) {
  return {
    type: USER_SELECTED,
    payload: user
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}
