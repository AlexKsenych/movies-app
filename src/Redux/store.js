import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducer';

const middelwers = applyMiddleware(thunkMiddleware)

let store = createStore(rootReducer, middelwers);

export default store;