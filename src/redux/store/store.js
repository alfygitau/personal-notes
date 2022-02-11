import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

// if(process.env.NODE_ENV === "development"){
//     middleware.push(logger)
// }
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);