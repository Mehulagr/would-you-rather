import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import '../css/App.css';
import { handleInitialData }  from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import { BrowserRouter as Router } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props;

  
      return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div>
              { this.props.loading === true
                ? null
                : <LoggedIn authedUser={authedUser} />
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