import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from 'redux-persist';

const middlewares = []; // keeping all middleware in an array so we can simply pass it to applyMiddleware

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // creating redux store by passing the root reducer and the optional middlewares
export const persistor = persistStore(store);

