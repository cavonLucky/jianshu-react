/**
 * @template 全局顶部导航栏
 */

import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        {/* 左边 - logo */}
        <Logo />
        <Nav>
          {/* 中间 - 左边 */}
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载 App</NavItem>
          {/* 中间 - 右边 */}
          <NavItem className="right">登录</NavItem>
          {/* 中间 - 右边 Aa */}
          <NavItem className="right">
            <i className="iconfont icon-Aa">&#xe636;</i>
          </NavItem>
          {/* 中间 - 搜索 */}
          <NavSearchWrapper>
            <NavSearch />
            <i className="iconfont icon-Magnifier">&#xe62d;</i>
          </NavSearchWrapper>
          {/* 右边 - 输入 */}
          <Addition>
            <Button className="wrtting">
              <i className="iconfont icon-yumaobi">&#xe6e5;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>

        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;