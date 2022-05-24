/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-04-20 17:43:53
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-05-24 17:04:41
 * @FilePath: /jianshu-react/src/pages/details/index.js
 * @Description: 详情页面
 */

import React from "react";
import { connect } from "react-redux";
import { DetailsWrapper, Header, Content } from './style';
import { actionCreators } from "./store";

class Details extends React.Component {

  componentDidMount() {
    this.props.getDetails();
  }

  render() {
    const { title, content } = this.props;
    return (
      <DetailsWrapper>
        <Header>{title}</Header>
        {/* dangerouslySetInnerHTML 转义 html */}
        <Content dangerouslySetInnerHTML={{ __html: content }}>
          {/* <img src="//upload-images.jianshu.io/upload_images/21393702-491a02d544269933.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/791/format/webp" alt="" />
          <p>有人说过这样一段话，深以为然。“这个世界不是有钱人的世界，也不是无钱人的世界，它是有心人的世界。”</p>
          <p>如此这样以为，那是因为世界是需要被感受的，而唯有心才能感受这世界。</p>
          <p>当然，世界没有想像中的那么好，也没有想像中的那么糟，世界有好有坏，有悲有喜，有苦有甜，而这一切都需用心来认真体会和感受。</p>
          <p>有钱人不可拥有世界，没钱人也不能被世界抛弃。有钱人买不来所有的快乐，没钱人也不能丧失生活的幸福。</p>
          <p>不管富裕还是贫穷，有一颗感知世界的心，懂得知恩图报，懂得悲天悯人，懂得春有百花秋有月，夏有凉风冬有雪，便是人间好时候。</p>
          <p>钱多怎样，钱少又怎样，钱多多花，钱少少花，只要有一颗善心，世界就是你的。</p> */}
        </Content>
      </DetailsWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['details', 'title']),
  content: state.getIn(['details', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getDetails: () => {
    dispatch(actionCreators.getDetails());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);