import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducer';

const middlewares = applyMiddleware(thunkMiddleware)

let store = createStore(rootReducer, middlewares);

export default store;