import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import classnames from 'classnames';
import { Route, Redirect } from "react-router-dom";

class QuestionsListPage extends Component {
  state = {
    activetab: 'unanswered'
  };

  toggle(tab) {
    if (this.state.activetab !== tab) {
      this.setState({
        activetab: tab
      });
    }
  }

  render() {
    const { authedUser, answeredQuestionIds, unAnsweredQuestionIds } = this.props

    return (
      <Route>
        {authedUser.id ? 
          <div className='container'>
              <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                <li className="nav-item mx-1">
                  <a className={classnames('nav-link', { active: this.state.activetab === 'unanswered' })} onClick={() => { this.toggle('unanswered') }} id="unanswered" data-toggle="pill" href="#pills-unanswered" role="tab" aria-controls="pills-unanswered">
                    Unanswered Questions
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className={classnames('nav-link', { active: this.state.activetab === 'answered' })} onClick={() => { this.toggle('answered') }} id="answered" data-toggle="pill" href="#pills-answered" role="tab" aria-controls="pills-answered">
                    Answered Questions
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent" activetab={this.state.activetab}>
                <div className={classnames('tab-pane', 'fade', 'show', { active: this.state.activetab === 'unanswered' })} id="unanswered" role="tabpanel" aria-labelledby="Unanswered Question">
                  <ul className='dashboard-list'>
                    {unAnsweredQuestionIds && unAnsweredQuestionIds.map((id) => (
                      <li key={id} className="mb-2">
                          <Question id={id} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={classnames('tab-pane', 'fade', 'show', { active: this.state.activetab === 'answered' })} id="answered" role="tabpanel" aria-labelledby="Answered Questions">
                  <ul className='dashboard-list'>
                    {answeredQuestionIds && answeredQuestionIds.map((id) => (
                      <li key={id} className="mb-2">
                          <Question id={id} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
          : <Redirect to="/" />
        }
      </Route>
    )
  }
}

function mapStateToProps({users, questions, authedUser}) {
  return {
    authedUser,
    unAnsweredQuestionIds: authedUser.id ? Object.keys(questions).filter((a) => !Object.keys(users[authedUser.id].answers).includes(a)) : 'none',
    answeredQuestionIds: authedUser.id ? Object.keys(questions).filter((a) => Object.keys(users[authedUser.id].answers).includes(a)) : 'none'
  }
}

export default connect(mapStateToProps)(QuestionsListPage)