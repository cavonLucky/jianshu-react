/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-15 16:16:10
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 14:24:13
 * @FilePath: /jianshu-react/src/pages/login/store/reducer.js
 * @Description:
 */

import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  login: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}