import React from "react";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <IconFontGlobalStyle />
        <GlobalStyle />
        <Header />
      </React.Fragment>
    )
  }
}

export default App;
