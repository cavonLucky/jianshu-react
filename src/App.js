import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IconFontGlobalStyle />
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>home</div>}></Route>
            <Route path="/details" element={<div>details</div>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
