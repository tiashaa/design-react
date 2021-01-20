import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
			
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { username, password } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username </label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Password</label>
					<textarea
						value={password}
						onChange={this.handlePasswordChange}
					/>
				</div>
				
				<button type="submit">Log in</button>
			</form>
		)
	}
}

export default Form