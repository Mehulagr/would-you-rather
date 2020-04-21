import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import '../css/App.css';
import { handleInitialData }  from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import QuestionsListPage from './QuestionsListPage';
import Leaderboard from './Leaderboard';
import AnswerQuestion from './AnswerQuestion';
import NewQuestion from './NewQuestion';
import Login from './Login';
import GameNav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props;
    console.log("User has loggen in ", authedUser)
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <GameNav />
            {this.props.loading === true
              ? null
              : <div>
                  {console.log("Hello", this.props.authedUser)}
                  <div className="container">
                    <Route path='/' exact component={QuestionsListPage} />
                    <Route path='/question/:id' component={AnswerQuestion} />
                    <Route path='/new' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/login' component={Login} />
                  </div>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    loading: questions === null,
    authedUser: authedUser === null
  }
}

export default connect(mapStateToProps)(App);