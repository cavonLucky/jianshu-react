/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-09 15:47:30
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-15 16:11:25
 * @FilePath: /jianshu-react/src/pages/login/style.js
 * @Description: 登录页面样式
 */

import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
  z-index: 0;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 25px;
  margin: 10px auto;
  text-align: center;
`;