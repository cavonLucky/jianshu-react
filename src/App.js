import React from "react";
import { GlobalStyle } from "./style";
import Header from "./common/ header/ index";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
      </React.Fragment>
    )
  }
}

export default App;
