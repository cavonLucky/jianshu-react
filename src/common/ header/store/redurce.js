
import * as constants from "./constants";

const defaultState = {
  focused: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

  if (action.type === constants.HEADER_SEARCH_INPUT_FOCUS) {
    return { focused: true };
  }

  if (action.type === constants.HEADER_SEARCH_INPUT_BLUR) {
    return { focused: false };
  }

  return state;
}