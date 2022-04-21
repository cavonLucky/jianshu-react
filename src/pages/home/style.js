import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  overflow: hidden;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin: 0 0px 18px 18px;
  .topic-pic {
     width: 32px;
     height: 32px;
     display: block;
     float: left;
     margin-right: 10px;
  }
  .topic-more {
    color: #999;
    padding-left: 10px;
    text-decoration: none;
  }
  &.topic-item-more {
    border: none;
    background: none;
  }
`;