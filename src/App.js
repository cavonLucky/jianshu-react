import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IconFontGlobalStyle />
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details" element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
