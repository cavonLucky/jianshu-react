/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2022-04-20 21:29:52
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2022-06-08 17:39:40
 * @FilePath: /jianshu-react/src/pages/home/components/List.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
              <Link key={index} to={`/details/${item.id}`}>
                <ListItem>
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
              </Link>
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