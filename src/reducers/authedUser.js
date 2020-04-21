import { SET_AUTHED_USER } from "../actions/authedUser";

export default function questions (state={}, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            const id = action.id;
            return {
                ...state,
                id
            }
        default:
            return state
    }
}