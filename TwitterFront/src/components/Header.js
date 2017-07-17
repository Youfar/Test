import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetTextInput from './TweetTextInput'

export default class Header extends Component {
  static propTypes = {
    addTweet: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTweet(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>TicoTico</h1>
        <TweetTextInput newTweet
                       onSave={this.handleSave}
                       placeholder="いまどうしてる？"/>
      </header>
    )
  }
}
