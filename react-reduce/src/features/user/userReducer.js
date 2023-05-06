import * as types from '../user/actionType';

const initialState = {
    users: [],  // all data store in arr users state
    user: {},   // single data stote
    loading: true,  // loading data true or false
};

const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
            }    

        default:
            return state;
    }
}

export default userReducers;