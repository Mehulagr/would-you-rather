import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
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
    }

    render() {
        const { users } = this.props
        const { usersSelectionValue } = this.state

        return (
            <div className="center">
                Login
                <form onSubmit={this.handleSubmit}>
                <select id="userSelection" value={usersSelectionValue} onChange={this.handleChange}>
                    { Object.keys(users).map((userKey) => {
                        return <option value={userKey} key={userKey}>{users[userKey].name}</option>
                    })
                    }
                </select> <br />
                <button type='submit'>Log In</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    return {
        users,
        //usersSelectionValue: users ? Object.keys(users)[0] : 'none'
    }
}

export default connect(mapStateToProps)(Login)