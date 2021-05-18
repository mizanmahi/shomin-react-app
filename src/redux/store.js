import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from 'redux-persist';

const middlewares = []; // keeping all middleware in an array so we can simpy pass it to applyMiddleware

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // crating redux store by passing the root reducer and the optional middlewares
export const persistor = persistStore(store);

