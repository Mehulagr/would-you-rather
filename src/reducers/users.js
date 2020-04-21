import { RECEIVE_USERS, ADD_ANSWER_TO_USER } from "../actions/users";

export default function questions (state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER_TO_USER:
            console.log(state)
            return {
                ...state,
                [action.newAnswer.authedUser]: {
                    ...state[action.newAnswer.authedUser],
                    answers: {
                        ...state[action.newAnswer.authedUser].answers,
                        [action.newAnswer.qid]: action.newAnswer.answer
                    }
                }
            }
        default:
            return state
        }
    }