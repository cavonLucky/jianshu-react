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

    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      searchInfoList,
      page,
      pageTotal,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage
    } = this.props;

    // 将 immutable 数据类型转为普通数据类型
    const newList = searchInfoList.toJS();
    let pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
      }
    }

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
                focused || mouseIn ? (
                  <NavSearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <SearchInfoTitle key={1}>
                      热门搜索
                      <SearchInfoSwitch onClick={() => handleChangePage(page, pageTotal, this.refSpin)}>
                        <i ref={node => this.refSpin = node} className={"iconfont icon-jiazai_shuaxin"}>&#xeaf4;</i>
                        换一批
                      </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                      {pageList}
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
    searchInfoList: state.getIn(["header", "searchInfoList"]),
    page: state.getIn(["header", "page"]),
    pageTotal: state.getIn(["header", "pageTotal"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus: () => {
    dispatch(actionCreators.getSearchInfoList());
    dispatch(actionCreators.getSearchInputFocus());
  },
  handleInputBlur: () => {
    dispatch(actionCreators.getSearchInputBlur());
  },
  handleMouseEnter: () => {
    dispatch(actionCreators.getSearchMouseEnter());
  },
  handleMouseLeave: () => {
    dispatch(actionCreators.getSearchMouseLeave());
  },
  handleChangePage: (page, pageTotal, spin) => {
    // 获取原始角度（如果这里的字符串不是数字，替换为空 === 截取数字）
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
    if (originAngle) {
      // 存在 以十进制转化为数字
      originAngle = parseInt(originAngle, 10);
    } else {
      // 不存在 初始值 0
      originAngle = 0;
    }
    // 默认为 0 ，每点击一次换页 icon 就增加 360 的旋转动画（0 + 360、360 + 360、720 + 360...）
    spin.style.transform = `rotate(${originAngle + 360}deg)`;

    // 如果当前页小于总页数，那么就当前页+1（1+1、2+1、3+1...）
    if (page < pageTotal) {
      dispatch(actionCreators.getSearchChangePage(page + 1));
    }
    // 当前页等于最后一页就回到第一页
    else {
      dispatch(actionCreators.getSearchChangePage(1));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);