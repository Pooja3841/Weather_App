import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";

// import all reducers
import rootReducer from "./reducers";

const middlewares = [];
// add logger to middleware
if (__DEV__) middlewares.push(createLogger());

// persist reducer configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store with reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk, ...middlewares))
);

export const persistor = persistStore(store);
