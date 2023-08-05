import { ActionTypes } from '../constants';

const initialState = {
    followers: [],
    following: [],
    userby_NAME: [],
};
function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.GET_USER_BY_NAME:
            return { ...state, userby_NAME: payload };
        case ActionTypes.GET_FOLLOWERS:
            return { ...state, followers: payload };
        case ActionTypes.GET_FOLLOWING:
            return { ...state, following: payload };
        case ActionTypes.RESET:
            return initialState;
        default:
            return state;
    }
}
export default userReducer;
