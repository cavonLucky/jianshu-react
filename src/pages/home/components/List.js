/**
 * @template 列表
 */

import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemInfo,
  LoadMore
} from "../style";
import { actionCreators } from "../store";

class List extends React.Component {

  render() {

    const { list, getMoreList, page } = this.props;

    return (
      <div>
        {/* <ListItem>
          <img className="list-pic" src="https://upload-images.jianshu.io/upload_images/19677135-baecd36e79a0b34b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="120" />
          <ListItemInfo>
            <h3 className="title">阳光一片</h3>
            <p className="describe">接连几天都是晴空万里，阳光明媚，看上去温暖和煦。 然而气温降到零下九度了，苏北正式进入数九寒天的季节。 这样的天气，阳光房里温暖如春，中午的时候...</p>
          </ListItemInfo>
        </ListItem> */}
        {
          list.toJS().map((item, index) => {
            return (
              <ListItem key={index}>
                {/* 左边 图片 */}
                {
                  item.src !== '' && <img className="list-pic" src={item.src} alt="120" />
                }
                {/* 右边 内容信息 */}
                <ListItemInfo className={item.src === '' ? 'list-is-img' : ''}>
                  <h3 className="title">{item.title}</h3>
                  <p className="describe">{item.describe}</p>
                </ListItemInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = dispatch => ({
  getMoreList: (page) => {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);