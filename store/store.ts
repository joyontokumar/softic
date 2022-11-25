import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducers";
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export default store;
export const persistor = persistStore(store);
