import { combineReducers } from "redux";

import userReducers from "../feature/user/userReducer";


// combine allk reducer in one rootReducer
const rootReducer=combineReducers({
    usersss:userReducers,
 })
 
 export default rootReducer;