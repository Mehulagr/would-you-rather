import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import QuestionsListPage from './QuestionsListPage';
import Leaderboard from './Leaderboard';
import AnswerQuestion from './AnswerQuestion';
import NewQuestion from './NewQuestion';
import Login from './Login';
import GameNav from './Nav';
import { Switch, Route } from 'react-router-dom';

class LoggedIn extends Component {
    render() {
        const {authedUser} = this.props;
      
        return (
            <div>
                <Switch>
                {
                    this.props.authedUser.id ? <Route path='/' exact component={Login}/> :
                    <Fragment>
                        <GameNav authedUser={authedUser}/>
                        <div className="container">
                            <Route path='/dashboard' exact component={QuestionsListPage} />
                            <Route path='/question/:id' component={AnswerQuestion} />
                            <Route path='/add' component={NewQuestion} />
                            <Route path='/leaderboard' component={Leaderboard} />
                            <Route exact path='/' component={Login} />
                        </div>
                    </Fragment>
                }
                </Switch>
            </div>
        )
    }
  }
  
  export default connect()(LoggedIn);