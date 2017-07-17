import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetItem from './TweetItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_FAVORITE} from '../constants/TweetFilters'

const TWEET_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_FAVORITE]: tweet => tweet.favorite
}

export default class MainSection extends Component {
  static propTypes = {
    tweets: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }


  handleShow = filter => {
    this.setState({ filter })
  }

  renderFooter() {
    const { tweets } = this.props
    const { filter } = this.state

    if (tweets.length) {
      return (
        <Footer
                filter={filter}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { tweets, actions } = this.props
    const { filter } = this.state

    const filteredTweets = tweets.filter(TWEET_FILTERS[filter])

    return (
      <section className="main">
        <ul className="tweet-list">
          {filteredTweets.map(tweet =>
            <TweetItem key={tweet.id} tweet={tweet} {...actions} />
          )}
        </ul>
        {this.renderFooter()}
      </section>
    )
  }
}
