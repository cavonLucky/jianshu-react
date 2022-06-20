/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-15 16:15:30
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 15:47:18
 * @FilePath: /jianshu-react/src/pages/login/store/actionCreators.js
 * @Description: 
 */
import axios from "axios";
import * as constants from "./constants";

export const login = (accout, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?accout=${accout}&password=${password}`).then(response => {
      if (response.data.data) {
        const action = {
          type: constants.CHANGE_LOGIN,
          value: true
        };
        dispatch(action);
      } else {
        alert('登录失败');
      }
    });
  }
};

export const logout = () => ({
  type: constants.CHANGE_LOGOUT,
  value: false
});