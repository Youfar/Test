/**
 * Created by cho.oh on 西暦17/07/18.
 */
import React, { Component } from 'react';
import Tweet from '../components/Tweet';

import { connect } from 'react-redux';
import { getTweets, deleteTweet, addFavoriteTweet, deleteFavoriteTweet } from '../actions/TweetAction';
import {dispatch} from "redux";
import PropTypes from 'prop-types'

class TweetList extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
        myUserName: PropTypes.string.isRequired,
        tweets: PropTypes.array.isRequired,
        token: PropTypes.string,
        // onClickGetTweets: (token: string) => void
    }

    render() {
        const { dispatch, myUserName, tweets, token } = this.props

        return (
            <section className="main">
                <ul className="tweet-list">
                    {tweets.map(tweet =>
                        <Tweet key={tweet.tweetId} myUserName={myUserName} dispatch={dispatch} token={token}{...tweet} />
                    )}
                </ul>
            </section>
        )
    }
}

function mapStateToTweetList(state) {
    return {
        myUserName: state.tokenReducer.username,
        tweets: state.tweetReducer.tweets,
        token: state.tokenReducer.token
    }
}

function mapDispatchToTweetList(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToTweetList,
    mapDispatchToTweetList
)(TweetList);