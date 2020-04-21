import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"
import {addUserAnswer} from "./users.js"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        //const authedUser = 'johndoe'
        const newQuestion = {
            author: authedUser,
            optionOneText: optionOne, 
            optionTwoText: optionTwo
        }
        return _saveQuestion(newQuestion)
            .then((question) => dispatch(addQuestion(question)))
    }
}

export function addQuestionAnswer (newAnswer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        newAnswer,
    }
}

export function handleAnswer (questionId, selectedOption) {
    return (dispatch, getState) => {
        //const { authedUser } = getState()
        const authedUser = 'tylermcginnis'
        const newAnswer = {
            authedUser: authedUser,
            qid: questionId, 
            answer: selectedOption
        }
        return _saveQuestionAnswer(newAnswer)
            .then(() => dispatch(addQuestionAnswer(newAnswer)))
            .then(() => dispatch(addUserAnswer(newAnswer)))
    }
}