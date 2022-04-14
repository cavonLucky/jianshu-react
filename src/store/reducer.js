
import {combineReducers} from "redux-immutable";
import { redurce as headerReducer} from "../common/ header/store";

export default combineReducers({
  header: headerReducer
});