import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import QuestionsListPage from './QuestionsListPage';
import Leaderboard from './Leaderboard';
import AnswerQuestion from './AnswerQuestion';
import NewQuestion from './NewQuestion';
import Login from './Login';
import GameNav from './Nav';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';

class LoggedIn extends Component {
    render() {
        const {authedUser} = this.props;
      
        return (
            <div>
                {   this.props.authedUser.id 
                    ?   <Route path='/' exact component={Login}/> 
                    :   <Fragment>
                            <GameNav authedUser={authedUser}/>
                            <div className="container">
                                <Switch>
                                    <PrivateRoute path='/dashboard' exact component={QuestionsListPage} />
                                    <PrivateRoute path='/question/:id' component={AnswerQuestion} />
                                    <PrivateRoute path='/add' component={NewQuestion} />
                                    <PrivateRoute path='/leaderboard' component={Leaderboard} />
                                    <Route exact path='/' component={Login} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                        </Fragment>
                }
            </div>
        )
    }
  }

  function mapStateToProps({authedUser}) {
    return {
      authedUser,
    }
  }
  
  export default connect(mapStateToProps)(LoggedIn);