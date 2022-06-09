/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-09 15:44:40
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-09 15:48:41
 * @FilePath: /jianshu-react/src/pages/login/index.js
 * @Description: 登陆页面
 */

import React from "react";
import { connect } from "react-redux";
import { LoginWrapper } from './style';

class login extends React.PureComponent {

  render() {

    return (
      <LoginWrapper>
        
      </LoginWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(login);

