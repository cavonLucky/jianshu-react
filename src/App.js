/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-04-12 09:01:04
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-09 16:03:16
 * @FilePath: /jianshu-react/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Details from "./pages/details";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <IconFontGlobalStyle />
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/details/:id" exact component={Details} />
          {/* <Route path="/details" component={Details} /> */}
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
