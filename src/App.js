/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-04-12 09:01:04
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 15:35:17
 * @FilePath: /jianshu-react/src/App.js
 * @Description: 页面入口
 */

import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";
import Home from "./pages/home";
import Login from "./pages/login";
import Write from "./pages/write";
// import Details from "./pages/details";
import Details from "./pages/details/loadable";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <IconFontGlobalStyle />
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
          <Route path="/details/:id" exact component={Details} />
          {/* <Route path="/details" component={Details} /> */}
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
