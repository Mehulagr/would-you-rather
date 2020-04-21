import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Link, withRouter, Route, Redirect } from "react-router-dom";

class NewQuestion extends Component {
    state = {
        questionOne: '',
        questionTwo: ''
    }
    handleClick = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { questionOne, questionTwo } = this.state
        dispatch(handleAddQuestion(questionOne, questionTwo))
        this.props.history.push(`/dashboard`)
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
          ...this.state,
          [e.target.name]: value
        });
      }

    render() {
        const { questionOne, questionTwo } = this.state

        return (
            <Route>
                {this.props.authedUser.id ? 
                    <div>
                        <div className="card flex-row flex-wrap">
                            <div className="card-header w-100">
                                Create New Question
                            </div>
                            <div className="card-block w-100 p-4 card-content">
                                <p className="card-title">Would you rather</p>
                                <div className="input-group py-2">
                                    <input 
                                        type='text' 
                                        placeholder='Enter option one here' 
                                        value={questionOne} 
                                        onChange={this.handleChange}
                                        name='questionOne'
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group py-2">
                                    <input 
                                        type='text' 
                                        placeholder='Enter option two here' 
                                        value={questionTwo} 
                                        onChange={this.handleChange}
                                        name='questionTwo'
                                        className="form-control"
                                    />
                                </div>
                                <Link onClick={this.handleClick} className="btn btn-outline-primary my-2" to={`/`}>Submit</Link>
                            </div>
                        </div>
                    </div>
                    : <Redirect to="/" />
                }
            </Route>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
      authedUser
    }
  }

export default withRouter(connect(mapStateToProps)(NewQuestion))