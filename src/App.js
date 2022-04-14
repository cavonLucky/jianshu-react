import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IconFontGlobalStyle />
        <GlobalStyle />
        <Header />
      </Provider>
    )
  }
}

export default App;
