
import axios from "axios";
import * as constants from "./constants";

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