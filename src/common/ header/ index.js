/**
 * @template 全局顶部导航栏
 */

import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav
} from "./style";

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>

        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;