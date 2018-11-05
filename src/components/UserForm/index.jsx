import React, { Component } from 'react'

class UserForm extends Component {
  state = {
    username: ''
  }

  handleChange = event => {
    const username = event.target.value
    this.setState({ username })
  }

  render() {
    return (
      <div>
        Name: <input type="text" value={ this.state.username } onChange={ this.handleChange }/>
      </div>
    )
  }
}

export default UserForm