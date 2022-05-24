/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-05-24 13:34:46
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-05-24 18:16:56
 * @FilePath: /jianshu-react/src/pages/details/store/reducer.js
 * @Description: 数据层，记录存放 store 的数据
 */

import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title: '',
  content: ''
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAILS_DATA:
      return state.merge = ({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
}