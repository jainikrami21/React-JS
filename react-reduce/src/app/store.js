import { createStore,applyMiddleware } from 'redux'  
import reduxThunk from 'redux-thunk'  // import middle ware redux-thunk for live api work
import rootReducer from './rootReducer'; // import main rootReducer

const middlewares=[reduxThunk];  // store redux middleare in variable

const store=createStore(rootReducer,applyMiddleware(...middlewares)); // pass rootReducer and also apply middleware to reducer

export default store;