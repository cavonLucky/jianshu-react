/**
 * @template 专题
 */

import React from "react";
import { connect } from "react-redux";
import {
  TopicWrapper,
  TopicItem
} from "../style";

class Topic extends React.Component {

  render() {

    const { topicItemList } = this.props;

    return (
      <TopicWrapper>

        {/* <div class="recommend-collection">
          <a class="collection" target="_blank" href="/c/yD9GAd?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">读书</div>
          </a>            <a class="collection" target="_blank" href="/c/7b2be866f564?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">摄影</div>
          </a>            <a class="collection" target="_blank" href="/c/fcd7a62be697?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">故事</div>
          </a>            <a class="collection" target="_blank" href="/c/8c92f845cd4d?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">手绘</div>
          </a>            <a class="collection" target="_blank" href="/c/V2CqjW?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">@IT·互联网</div>
          </a>            <a class="collection" target="_blank" href="/c/cc7808b775b4?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">自然科普</div>
          </a>            <a class="collection" target="_blank" href="/c/5AUzod?utm_medium=index-collections&amp;utm_source=desktop">
            <img src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
            <div class="name">旅行·在路上</div>
          </a>
          <a class="more-hot-collection" target="_blank" href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop">
            更多热门专题 <i class="iconfont ic-link"></i>
          </a>
        </div> */}

        {/* 专题 */}
        {/* <TopicItem>
          <img className="topic-pic" src={"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"} alt="64" />
          旅行·在路上
        </TopicItem> */}
        {
          topicItemList.toJS().map(item => {
            return (
              <TopicItem key={item.id}>
                <img className="topic-pic" src={item.src} alt="64" />
                {item.title}
              </TopicItem>
            )
          })
        }
        {
          topicItemList.size > 0 && (
            <TopicItem className="topic-item-more">
              <a className="topic-more" target="_blank" href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop">
                更多热门专题 {`>`}
                {/* <i className="iconfont ic-link"></i> */}
              </a>
            </TopicItem>
          )
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicItemList: state.getIn(["home", "topicList"])
});

export default connect(mapStateToProps, null)(Topic);