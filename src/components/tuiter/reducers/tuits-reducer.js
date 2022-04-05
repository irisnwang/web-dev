import {UPDATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, CREATE_TUIT} from "../../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case CREATE_TUIT:
      return [
          action.newTuit,
        ...state
      ];
    case DELETE_TUIT:
      return state.filter(
          tuit => tuit._id !== action.tuit._id);
    case UPDATE_TUIT:
      return state.map(
          tuit => tuit._id === action.tuit._id ?
              action.tuit : tuit);
    default:
      return state;
  }
}
export default tuitsReducer;