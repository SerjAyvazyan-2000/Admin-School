import {createStore} from "redux"
import rootReducer from "./combineRedusers/combine"
const store = createStore(rootReducer)

export default store