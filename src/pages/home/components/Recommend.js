/**
 * @template 板块 推荐
 */

import React from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends React.Component {
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