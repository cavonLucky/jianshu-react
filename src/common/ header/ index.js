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
  NavSearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from "./style";
import { actionCreators } from "./store";
class Header extends React.Component {

  render() {

    const { focused, handleInputFocus, handleInputBlur, searchInfoList } = this.props;

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
                in={focused}
                timeout={200}
                classNames={"slide"}
              >
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i className={focused ? "iconfont icon-Magnifier focused" : "iconfont icon-Magnifier"}>&#xe62d;</i>

              {/* 搜索发现 */}
              {
                focused ? (
                  <NavSearchInfo>
                    <SearchInfoTitle>
                      热门搜索
                      <SearchInfoSwitch>
                        <i className={"iconfont icon-jiazai_shuaxin"}>&#xeaf4;</i>
                        换一批
                      </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                      {
                        searchInfoList.map(item => {
                          return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                      }
                    </SearchInfoList>
                  </NavSearchInfo>
                ) : null
              }

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
}

const mapStateToProps = (state) => {
  return {
    // 两句代码等价
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]),
    searchInfoList: state.getIn(["header", "searchInfoList"])
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus: () => {
    dispatch(actionCreators.getSearchInfoList());
    dispatch(actionCreators.getSearchInputFocus());
  },
  handleInputBlur: () => {
    dispatch(actionCreators.getSearchInputBlur());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);