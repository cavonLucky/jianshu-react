/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-04-14 15:23:10
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-05-24 15:44:52
 * @FilePath: /jianshu-react/src/store/reducer.js
 * @Description: 接受每个组件里面的 reducer 容器
 */

import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/ header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailsReducer } from "../pages/details/store";

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  details: detailsReducer
});