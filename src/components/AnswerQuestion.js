import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/questions'

class AnswerQuestion extends Component {
    state = {
        selectedOption: 'optionOne'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, question } = this.props
        const { selectedOption } = this.state
        const questionId = question.id;
        //console.log("", e)
        dispatch(handleAnswer(questionId, selectedOption))
    }

    handleChange = (e) => {
        this.setState({
          selectedOption: e.target.value
        });
    }

    render() {
        const { user, question, didUserAnswerThisQuestion } = this.props
        const { selectedOption } = this.state

        return (
            <div className="dashboard-list">
                { didUserAnswerThisQuestion
                    ?   <div className="card flex-row flex-wrap">
                            <div className="card-header w-100">
                                Asked by {user.name}
                            </div>
                            <div className="card-block p-2 align-middle">
                                <img className="rounded-circle align-middle avatar-image" src={user.avatarURL} alt={user.name}></img>
                            </div>
                            <div className="card-block px-4 py-2 card-content">
                                <h4 className="card-title">Results:</h4>
                                <p className="mb-1">Would you rather {question && question.optionOne.text}? {question && question.optionOne.votes.length}</p>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p>Would you rather {question && question.optionTwo.text}? {question && question.optionTwo.votes.length}</p>
                                <div className="progress mb-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    :   <div className="card flex-row flex-wrap mb-4">
                            <div className="card-header w-100">
                                {user.name} asks...
                            </div>
                            <div className="card-block p-2 align-middle">
                                <img className="rounded-circle align-middle avatar-image" src={user.avatarURL} alt={user.name}></img>
                            </div>
                            <div className="card-block px-4 py-2 card-content">
                                <h4 className="card-title">Would you rather</h4>
                                <form onSubmit={this.handleSubmit} className='question-radio'>
                                    <input 
                                        type="radio" 
                                        name="questionGroup" 
                                        value="optionOne" 
                                        id="optionOne" 
                                        checked={selectedOption === 'optionOne'}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="questionOne">{question && question.optionOne.text}</label>
                                    
                                    <input 
                                        type="radio" 
                                        name="questionGroup" 
                                        value="optionTwo" 
                                        id="optionTwo" 
                                        checked={selectedOption === 'optionTwo'}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="questionTwo">{question && question.optionTwo.text}</label>
                                    
                                    <button className="btn btn-outline-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                
                }                
            </div>
        )
    }
}

function mapStateToProps({users, questions}, props) {
    const authedUser = "johndoe"
    const {id} = props.match.params
    const question = questions[id]
    const user = question ? users[question.author] : 'none'
    const didUserAnswerThisQuestion = users && question ? Object.keys(users[authedUser].answers).includes(question.id) : 'none'

    return {
        user,
        question,
        didUserAnswerThisQuestion
    }
}

export default connect(mapStateToProps)(AnswerQuestion)