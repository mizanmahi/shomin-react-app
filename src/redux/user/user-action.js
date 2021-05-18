import { SET_CURRENT_USER } from './user-action-types';

const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export default setCurrentUser;