import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk"; 
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware() // creating saga middleware


// keeping all middleware in an array so we can simply pass it to applyMiddleware by just spreadig the array 
// const middlewares = [thunk]; 
const middlewares = [sagaMiddleware]; // adding saga middleware instead of thunk

// if the node_env is in dev mood then its gonna push logger middleware to the middlewares array
if (process.env.NODE_ENV === "development") {
   middlewares.push(logger);
}

// creating redux store by passing the root reducer and the optional middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
