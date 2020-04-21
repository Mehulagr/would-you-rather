import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsListPage extends Component {
  render() {
    const {questionIds} = this.props
    return (
      <div className='container'>
          {/* <h4 className='center'>List of Questions</h4> */}
          <ul className='dashboard-list'>
            {questionIds && questionIds.map((id) => (
              <li key={id}>
                  <Question id={id} />
              </li>
            ))}
          </ul>
      </div>
    )
  }
}

function mapStateToProps({users, questions}) {
  return {
    users,
    questionIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(QuestionsListPage)