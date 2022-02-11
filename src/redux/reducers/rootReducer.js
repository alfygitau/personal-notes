import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {loginReducer, registerReducer} from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist:['login']
}

const rootReducer = combineReducers({
    login:loginReducer,
    register: registerReducer
})

export default persistReducer(persistConfig, rootReducer)