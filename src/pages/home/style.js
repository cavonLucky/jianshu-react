import styled from "styled-components";

// 专题 start
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
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  overflow: hidden;
  // margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
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
  // margin: 0 0px 18px 18px;
  margin: 0 18px 18px 0;
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
// 专题 end

// list 列表 start
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  // border-top: 1px solid #dcdcdc;
  overflow: hidden;
  .list-pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const ListItemInfo = styled.div`
  width: 498px;
  float: left;
  &.list-is-img {
    width: 100%;
  }
  .title {
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    margin: -7px 0 4px;
  }
  .describe {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background-color: #a5a5a5;
  margin: 30px auto 60px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

// list 列表 end


// 板块推荐 start
export const RecommendWrapper = styled.div`
  margin: 30px 0px;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  min-height: 50px;
  // background: url(${props => props.url});
  // background-size: contain;
  img {
    width: 100%;
  }
`;

// 板块推荐 end

// App 下载提示 start
export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius : 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;
// App 下载提示 end

// 回到顶部 star
export const BackTop = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: hsla(0,0%,71%,.1);
  border: 1px solid #dcdcdc;
  position: fixed;
  z-index: 1040;
  bottom: 40px;
  right: 40px;
  text-align: center;
  cursor: pointer;
`;
// 回到顶部 end
