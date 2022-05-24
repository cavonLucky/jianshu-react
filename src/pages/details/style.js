/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-05-18 20:22:10
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-05-24 13:30:23
 * @FilePath: /jianshu-react/src/pages/details/style.js
 * @Description: 详情 UI 组件
 */

import styled from "styled-components";

export const DetailsWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 200px;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 20px 0;
    font-size: 16px;
    line-height: 30px;
  }
`;
