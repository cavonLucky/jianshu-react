
import * as constants from "./constants";
import { fromJS } from "immutable";

/**
 * immutable对象不可更改
 * set(): 会结合之前 immutable 对象的值和设置的值，返回一个全新的对象
 */
const defaultState = fromJS({
  focused: false,
  searchInfoList: [],
  page: 1,
  pageTotal: 1,
  mouseIn: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HEADER_SEARCH_INPUT_FOCUS:
      return state.set("focused", true);
    case constants.HEADER_SEARCH_INPUT_BLUR:
      return state.set("focused", false);
    case constants.HEADER_SEARCH_INFO_LIST:
      return state.merge({
        searchInfoList: action.data,
        pageTotal: action.pageTotal
      });
    // return state.set("searchInfoList", action.data).set("pageTotal", action.pageTotal);
    case constants.HEADER_SEARCH_MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.HEADER_SEARCH_MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.HEADER_SEARCH_CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
}