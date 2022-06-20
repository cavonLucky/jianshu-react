/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-08 17:27:46
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 15:45:23
 * @FilePath: /jianshu-react/src/pages/home/store/actionCreators.js
 * @Description: 
 */

import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((response) => {
      if (response.data.success) {
        const { topicList, articleList, recommendList } = response.data.data;
        const action = {
          type: constants.CHANGE_HOME_DATA,
          topicList,
          articleList,
          recommendList
        };
        dispatch(action);
      }
    }).catch((error) => {
      alert(error.message);
    });
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homemore.json?page=${page}`).then((response) => {
      if (response.data.success) {
        const action = {
          type: constants.ADD_ARTICLE_LIST,
          // list: List(response.data.data) // 仅仅只是最外层的数组变成了 immutable 格式
          list: fromJS(response.data.data),
          nextPage: page + 1
        };
        dispatch(action);
      }
    }).catch((error) => {
      alert(error.message);
    });
  }
};

export const toggleTopShow = show => ({
  type: constants.TOGGLE_SCROLL_SHOW,
  show
});