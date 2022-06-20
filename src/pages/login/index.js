/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-06-09 15:44:40
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-20 15:10:34
 * @FilePath: /jianshu-react/src/pages/login/index.js
 * @Description: 登录页面
 */

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends React.PureComponent {

  render() {
    const { login, loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="手机号或邮箱" ref={(input) => { this.accout = input; }} />
            <Input placeholder="密码" ref={(input) => { this.password = input; }} />
            <Button onClick={() => { login(this.accout, this.password); }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to={'/'} />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
  login: (accoutElem, passwordElem) => {
    // if (!accoutElem.value) {
    //   return alert('请输入手机号或邮箱')
    // }
    // if (!passwordElem.value) {
    //   return alert('请输入密码')
    // }
    dispatch(actionCreators.login(passwordElem.value, accoutElem.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

