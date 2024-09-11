import { REDUCER_ACTION_TYPES } from "./constants";

export const TestReducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD:
      newState.mottos.push(action.payload);
      return newState;
    case REDUCER_ACTION_TYPES.UPDATE:
      newState.mottos[action.payload.index] = action.payload.text;
      return newState;
    case REDUCER_ACTION_TYPES.REMOVE:
      newState.mottos.splice(action.payload, 1);
      return newState;
    case REDUCER_ACTION_TYPES.FETCH:
      return state.mottos;
    default:
      return state;
  }
};
