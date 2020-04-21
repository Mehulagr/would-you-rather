import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionsListPage from './QuestionsListPage';
import Leaderboard from './Leaderboard';
import AnswerQuestion from './AnswerQuestion';
import NewQuestion from './NewQuestion';
import Login from './Login';
import GameNav from './Nav';
import { Route, Redirect } from 'react-router-dom';

class LoggedIn extends Component {
    render() {
        const {authedUser} = this.props;

        if (authedUser === true) {
            console.log("It is logged in", authedUser)
            return <Redirect to='/login' />
        }
      
        return (
            <div>
                <GameNav />
                <div className="container">
                    <Route path='/' exact component={QuestionsListPage} />
                    <Route path='/question/:id' component={AnswerQuestion} />
                    <Route path='/new' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/login' component={Login} />
                </div>
            </div>
        )
    }
  }
  
  export default connect()(LoggedIn);