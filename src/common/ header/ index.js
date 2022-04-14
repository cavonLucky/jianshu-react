/**
 * @template 全局顶部导航栏
 */

import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";

const Header = (props) => {

  return (
    <HeaderWrapper>
      <WidthLimit>
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
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames={"slide"}
            >
              <NavSearch
                className={props.focused ? "focused" : ""}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              />
            </CSSTransition>
            <i className={props.focused ? "iconfont icon-Magnifier focused" : "iconfont icon-Magnifier"}>&#xe62d;</i>
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
      </WidthLimit>
    </HeaderWrapper>
  );

}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus: () => {
    const action = {
      type: "search_input_focus"
    };
    dispatch(action);
  },
  handleInputBlur: () => {
    const action = {
      type: "search_input_blur"
    };
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);