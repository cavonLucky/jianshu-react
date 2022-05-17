
import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable"

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
      console.log(error.message);
    });
  }
}

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
      console.log(error.message);
    });
  }
}