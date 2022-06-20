/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-05-24 13:35:28
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 15:46:49
 * @FilePath: /jianshu-react/src/pages/details/store/actionCreators.js
 * @Description: React Component 的数据载体，数据传递角色
 */

import axios from "axios";
import * as constants from "./constants";

export const getDetails = (id) => {
  return (dispatch) => {
    axios.get(`/api/details.json?id=${id}`).then((response) => {
      if (response.data.success) {
        const { title, content } = response.data.data;
        const action = {
          type: constants.CHANGE_DETAILS_DATA,
          title,
          content
        };
        dispatch(action);
      }
    }).catch(error => {
      alert(error.message);
    });
  }
};
