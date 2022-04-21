import styled from "styled-components";
import LogoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  // position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const WidthLimit = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;
// padding-right: 70px;
// box-sizing: border-box;

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  .icon-Magnifier {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    color: #969696;
  }
  .iconfont {
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 19px;
  background: #eee;
  outline: none;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-enter-exit {
    width: 1600px;
  }
`;

export const NavSearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  padding: 0 20px;
  width: 240px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .icon-jiazai_shuaxin {
    display: block;
    float: left;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;
// 围绕中心点进行旋转
// transform-origin: center center;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 10px;
  margin: 0 10px 15px 0;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
  cursor: pointer;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid rgba(236,97,73,.7);
  padding: 0px 20px;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ea6f5a;
  }
  &.wrtting {
    color: #fff;
    background: #ea6f5a;
  }
`;