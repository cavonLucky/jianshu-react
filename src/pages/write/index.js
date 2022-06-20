/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-20 14:31:53
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 15:40:56
 * @FilePath: /jianshu-react/src/pages/write/index.js
 * @Description: 写文章页面
 */

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends React.PureComponent {

  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to={'/login'} />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

export default connect(mapStateToProps, null)(Write);
