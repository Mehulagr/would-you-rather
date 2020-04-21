import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom";

class Leaderboard extends Component {
  render() {
    const {users, ids, authedUser} = this.props
    
    return (
      <Route>
        {authedUser.id ? 
          <div className='container'>
              <ul className='dashboard-list'>
                {users && ids.map((id) => (
                  <li key={id} className="mb-2">
                      <div className="card flex-row flex-wrap">
                        <div className="card-block p-2 flex-center">
                            <img className="rounded-circle avatar-image" src={users[id].avatarURL} alt={users[id].name}></img>
                        </div>
                        <div className="card-block px-4 py-2 card-content-2">
                            <h4 className="card-title">{users[id].name}</h4>
                            <p className="card-text">Number of answers: {Object.keys(users[id].answers).length}</p>
                            <p className="card-text">Number of questions: {users[id].questions.length}</p>
                        </div>
                        <div className="card-block p-2 align-middle">
                            <p className="text-center mb-1">Score</p>
                            <div className="circle">
                              <p>{Object.keys(users[id].answers).length + users[id].questions.length}</p> 
                            </div>
                        </div>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
          : <Redirect to="/" />
        }
      </Route>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  const userScore = user => {
    return Object.keys(users[user].answers).length + users[user].questions.length
  }
  return {
    users,
    ids: Object.keys(users)
          .sort((a, b) => userScore(b) - userScore(a)),
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)