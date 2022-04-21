/**
 * @template 列表
 */

import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemInfo
} from "../style";

class List extends React.Component {

  render() {

    const { articleList } = this.props;

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
          articleList.toJS().map(item => {
            return (
              <ListItem key={item.id}>
                {/* 左边 图片 */}
                <img className="list-pic" src={item.src} alt="120" />
                {/* 右边 内容信息 */}
                <ListItemInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="describe">{item.describe}</p>
                </ListItemInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(["home", "articleList"])
});

export default connect(mapStateToProps, null)(List);