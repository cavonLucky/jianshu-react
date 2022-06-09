/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-04-20 21:29:52
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-09 15:56:22
 * @FilePath: /jianshu-react/src/pages/home/components/Recommend.js
 * @Description: 板块推荐
 */

import React from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends React.PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {/* {
          this.props.list.toJS().map(item => {
            return <RecommendItem url={item.url} key={item.id} />
          })
        } */}
        {
          this.props.list.toJS().map(item => {
            return (
              <RecommendItem key={item.id}>
                <img src={item.url} alt={item.alt} />
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "recommendList"])
});

export default connect(mapStateToProps, null)(Recommend);