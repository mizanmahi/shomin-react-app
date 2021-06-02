import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// keeping all middleware in an array so we can simply pass it to applyMiddleware
const middlewares = [thunk];

// if the node_env is in dev mood then its gonna push logger middleware to the middlewares array
if (process.env.NODE_ENV === "development") {
   middlewares.push(logger);
}

// creating redux store by passing the root reducer and the optional middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
