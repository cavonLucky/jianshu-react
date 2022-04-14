
import { combineReducers } from "redux";
import { redurce as headerReducer} from "../common/ header/store";

export default combineReducers({
  header: headerReducer
});