
import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const searchInfoListAction = (data) => ({
  type: constants.HEADER_SEARCH_INFO_LIST,
  // 由于 reducer 定义的 searchInfoList 是一个 immutable 数组，此时要把普通 data 数组也同样变成 immutable 才不会出错
  data: fromJS(data)
})

export const getSearchInputFocus = () => ({
  type: constants.HEADER_SEARCH_INPUT_FOCUS
})

export const getSearchInputBlur = () => ({
  type: constants.HEADER_SEARCH_INPUT_BLUR
})

// 获取换一批的数据
export const getSearchInfoList = () => {
  // 用到 redux-thunk 可以直接传一个 dispatch
  return (dispatch) => {
    axios.get("/api/headerSearchInfoList.json").then(response => {
      dispatch(searchInfoListAction(response.data));
    }).catch((error) => {
      console.log("error");
    })
  }
}