/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-09 15:44:40
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-15 16:06:25
 * @FilePath: /jianshu-react/src/pages/login/index.js
 * @Description: 登录页面
 */

import React from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from './style';

class login extends React.PureComponent {

  render() {

    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="手机号或邮箱" />
          <Input placeholder="密码" />
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(login);

