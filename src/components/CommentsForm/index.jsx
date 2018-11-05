import React, { Component } from 'react'

import './style.css'

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 140
  }
}

class CommentsForm extends Component {
  state = {
    username: '',
    text: ''
  }

  handleChange = type => event => {
    const { value } = event.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      user: '',
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        User:
        <input
          type="text"
          value={ this.state.user }
          onChange={ this.handleChange('user') }
        />

        comment:
        <input
          type="text"
          value={ this.state.text }
          onChange={ this.handleChange('text') }
        />

        <input type="submit" value="submit"/>
      </form>
    )
  }
}

export default CommentsForm