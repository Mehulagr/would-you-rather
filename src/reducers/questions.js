import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER_TO_QUESTION } from "../actions/questions";

export default function questions (state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            //TODO: this might not be working right.
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_ANSWER_TO_QUESTION:
            return {
                ...state,
                [action.newAnswer.qid]: {
                    ...state[action.newAnswer.qid],
                    [action.newAnswer.answer]: {
                        ...state[action.newAnswer.qid][action.newAnswer.answer],
                        votes: state[action.newAnswer.qid][action.newAnswer.answer].votes.concat([action.newAnswer.authedUser])
                    }
                }
            }
        default:
            return state
    }
}