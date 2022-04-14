
import * as constants from "./constants";
import { fromJS } from "immutable";

/**
 * immutable对象不可更改
 * set(): 会结合之前 immutable 对象的值和设置的值，返回一个全新的对象
 */
const defaultState = fromJS({
  focused: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

  if (action.type === constants.HEADER_SEARCH_INPUT_FOCUS) {
    return state.set("focused", true);
  }

  if (action.type === constants.HEADER_SEARCH_INPUT_BLUR) {
    return state.set("focused", false );
  }

  return state;
}