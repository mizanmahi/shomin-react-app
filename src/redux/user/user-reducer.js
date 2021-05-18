import { SET_CURRENT_USER } from './user-action-types';

const initialSate = {
    currentUser: null
}

const userReducer = (state = initialSate, {type, payload}) => {
    switch(type){
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}

export default userReducer;