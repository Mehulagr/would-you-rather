import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser, logoutUser } from '../actions/authedUser'
import { withRouter } from "react-router-dom";
import logo from '../image/would-you-rather-logo.png';

class Login extends Component {
    componentDidMount(){
        this.props.dispatch(logoutUser())
      }

    state = {
        usersSelectionValue: 'sarahedo'
    }
    handleChange = (e) => {
        const usersSelectionValue = e.target.value

        this.setState(() => ({
            usersSelectionValue
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.usersSelectionValue))
        this.props.history.location.state
            ? this.props.history.push(this.props.history.location.state.from.pathname)
            : this.props.history.push('/dashboard')
    }

    render() {
        const { users } = this.props
        const { usersSelectionValue } = this.state

        return (
            <div className="center card">
                <form onSubmit={this.handleSubmit}>
                    <div className="card-header w-100">
                        <h4>Welcome to would you rather</h4>
                        <p className="m-0">Login to continue</p>
                    </div>
                    <img className="card-img-top" src={logo} alt="Would you rather game logo" />
                    <div className="card-block w-100 p-4 card-content">
                        <div className="input-group">
                            <select className="custom-select" id="userSelection" value={usersSelectionValue} onChange={this.handleChange}>
                                { Object.keys(users).map((userKey) => {
                                    return <option value={userKey} key={userKey}>{users[userKey].name}</option>
                                })
                                }
                            </select>
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-outline-primary my-2">Login</button>
                    </div>
                {/* <button type='submit'>Log In</button> */}
                </form>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}, {id}) {
    return {
        users,
        authedUser
        //usersSelectionValue: users ? Object.keys(users)[0] : 'none'
    }
}

export default withRouter(connect(mapStateToProps)(Login))