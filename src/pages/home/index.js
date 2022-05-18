
/**
 * @template 首页 - 导航栏下面中间部分
 */

import React from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";
import { actionCreators } from './store';

class Home extends React.Component {

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  // 组件即将被销毁的时候 window 上绑定的 scroll 事件监听移除
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  // 回到顶部
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  // 组件挂载之后在 window 上绑定 scroll 事件监听
  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  render() {
    return (
      <HomeWrapper>

        {/* 左边内容 */}
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic />
          <List />
        </HomeLeft>

        {/* 右边内容 */}
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>

        {/* 回到顶部 */}
        {
          this.props.showScroll && <BackTop onClick={this.handleScrollTop}><i className="iconfont icon-backtop">&#xe609;</i></BackTop>
        }

      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData: () => {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow: () => {
    // 滚动区域大于 400
    if (document.documentElement.scrollTop > 200) {
      // 显示
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      // 隐藏
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);