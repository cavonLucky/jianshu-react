/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-20 15:59:59
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 16:27:09
 * @FilePath: /jianshu-react/src/pages/details/loadable.js
 * @Description: 异步加载
 */
import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  // 异步加载指定组件
  loader: () => import('./'),
  // loading: Loading,
  // 临时加载
  loading: () => {
    return <>正在加载···</>
  }
});

export default class AsyncApp extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}