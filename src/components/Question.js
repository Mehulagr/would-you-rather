import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
    render() {
        const { question, user, questionStatus } = this.props

        return (
            <div>
                <div className="card flex-row flex-wrap">
                    <div className="card-header w-100">
                        {user.name} asks...
                    </div>
                    <div className="card-block p-2 align-middle">
                        <img className="rounded-circle align-middle avatar-image" src={user.avatarURL} alt={user.name}></img>
                    </div>
                    <div className="card-block px-4 py-2 card-content">
                        <h4 className="card-title">Would you rather</h4>
                        <p className="card-text">...{question.optionOne.text}...</p>
                        {questionStatus === "unanswered"
                            ?   <Link className="btn btn-outline-primary" to={`/question/${question.id}`}>Vote</Link>
                            :   <Link className="btn btn-primary w-100" to={`/question/${question.id}`}>View Poll</Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, {id, questionStatus}) {
    const question = questions[id]
    const user = question ? users[question.author] : 'none'

    return {
        user,
        question,
        questionStatus
    }
}

export default withRouter(connect(mapStateToProps)(Question))