import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TweetTextInput from './TweetTextInput'

export default class TweetItem extends Component {
  static propTypes = {
    tweet: PropTypes.object.isRequired,
    deleteTweet: PropTypes.func.isRequired,
    favoriteTweet: PropTypes.func.isRequired
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTweet(id)
    }
  }

  render() {
    const { tweet, favoriteTweet, deleteTweet } = this.props

    let element
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={tweet.favorite}
                 onChange={() => favoriteTweet(tweet.id)} />
          <label>
            {tweet.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTweet(tweet.id)}
                  name="Delete"/>
        </div>
      )

    return (
      <li className={classnames({
        favorite: tweet.favorite,
      })}>
        {element}
      </li>
    )
  }
}
