import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers ({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
})