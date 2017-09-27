import update from "immutability-helper";
// ### reducer.js ###
const initialState = {
  activeUser: null,
  users: [
    {
      name: "Brody",
      bio: "Give me an audiobook and the open road"
    },
    {
      name: "Sawyer",
      bio: "I spend all my free time in nature"
    },
    {
      name: "Kerry",
      bio: "Coding by the pool is the life for me"
    }
  ]
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "USER_SELECTED":
      return update(state, { activeUser: { $set: action.payload } });
    case "ADD_USER":
      return update(state, { users: { $push: [action.payload] } });
    default:
      return state;
  }
};

export default reducer;
