import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
    render() {
        const { question, user } = this.props

        return (
            <div>
                {/* {question && 
                    <div className='question-card'>
                        <h5 className='question-card-header'>{user.name} asks...</h5>
                        <div className='question-card-content'>
                            <img src={user.avatarURL} alt={user.name}/>
                            <div className='question-card-text'>
                                <p>Would you rather</p>
                                <p>...{question.optionOne.text}...</p>
                                <Link to={`/question/${question.id}`} className='tweet'>Vote</Link>
                            </div>
                        </div>
                    </div>
                } */}

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
                        <Link className="btn btn-outline-primary" to={`/question/${question.id}`}>Vote</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, {id}) {
    const question = questions[id]
    const user = question ? users[question.author] : 'none'

    return {
        user,
        question
    }
}

export default withRouter(connect(mapStateToProps)(Question))