import { SET_AUTHED_USER, LOGOUT_USER } from "../actions/authedUser";

export default function questions (state={}, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            const id = action.id;
            return {
                ...state,
                id
            }
        case LOGOUT_USER:
            const newState = {}
            return {
                ...newState
            }
        default:
            return state
    }
}