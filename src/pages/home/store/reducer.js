
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [{
    "id": 1, "title": "读书", "src": "https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 2, "title": "摄影", "src": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 3, "title": "故事", "src": "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 4, "title": "手绘", "src": "https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 5, "title": "@IT·互联网", "src": "https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 6, "title": "自然科普", "src": "https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 7, "title": "旅行·在路上", "src": "https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }],
  articleList: [{
    "id": 1,
    "title": "阳光一片",
    "describe": "接连几天都是晴空万里，阳光明媚，看上去温暖和煦。 然而气温降到零下九度了，苏北正式进入数九寒天的季节。 这样的天气，阳光房里温暖如春，中午的时候...",
    "src": "https://upload-images.jianshu.io/upload_images/19677135-baecd36e79a0b34b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": 2,
    "title": "写小说第六十一天：我的小说上架销售了！",
    "describe": "昨日更新6267字，目前累计37.8万字。 今天早上照样当司机送人上班，但是对象有了一点不同。 本来早上有同事来接媳妇，我就不用送她去上医院，可...",
    "src": "https://upload-images.jianshu.io/upload_images/24507628-464a2644e24a4b21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": 3,
    "title": "结婚后，我成了蹭饭人",
    "describe": "先生回家已经有两天了，可是家里都还没开过火。基本上是婆家蹭一顿，娘家蹭一顿。就连早餐也是从婆家娘家带回来的，稍微加热一下就可以吃了。 明天决定不...",
    "src": "https://upload-images.jianshu.io/upload_images/2484762-66d9eb8ca6951aef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": 4,
    "title": "轻轻柔柔",
    "describe": "轻轻柔柔 焦小桥 醡浆草为酢浆草科植物，它喜欢温暖阳光的环境，常生长于路边或者田边，酢浆草的品种多达九百多，野生和园艺培育的品种都很多，除了南极...",
    "src": "https://upload-images.jianshu.io/upload_images/15992237-50c6bbbe637f5009.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    "id": 5,
    "title": "这是什么东西呢？",
    "describe": "果园里，果树刚剪过枝，大大小小的枝杈随意堆放在果树趟子里。时令尚早，上一年的枯叶和杂草依然铺陈在大地上，新的草芽还在土层里蓄势待发。 我们在果园...",
    "src": "https://upload-images.jianshu.io/upload_images/21509097-78ebcae6ffa9e0c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  },
  {
    "id": 6,
    "title": "微信红包",
    "describe": "今年收的最大的红包就是那个人转来的9999.00元。 这是我跟了他十八年来最大的红包，在此之前的节日礼物是五百。 估计他想开了，不再认为钱给了老...",
    "src": "https://upload-images.jianshu.io/upload_images/22094067-7839ad6b216be408.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    "id": 7,
    "title": "不写就没钱",
    "describe": "网易号今天提现了，599.35元。这应该是我一个多月都没写文，却还能提现的最后一笔收益了。 病中，确实不想太累，等身体好了再说吧。 有时想想，去...",
    "src": "https://upload-images.jianshu.io/upload_images/8981154-4ac3dc49d7d43475.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }],
  recommendList: [{
    id: 1,
    url: "https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png",
    alt: "Banner s daily"
  }, {
    id: 2,
    url: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    alt: "Banner s club"
  }, {
    id: 3,
    url: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    alt: "Banner s 7"
  }, {
    id: 4,
    url: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    alt: "Banner s 5"
  }, {
    id: 5,
    url: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
    alt: "Banner s 6"
  }]
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}