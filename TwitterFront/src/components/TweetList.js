/**
 * Created by youfar on 2017/07/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Tweet from './Tweet'
import { getTweets } from '../actions/TweetAction';

export default class TweetList extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
        tweets: PropTypes.array.isRequired,
        // deleteTweet: PropTypes.func.isRequired,
        // favoriteTweet: PropTypes.func.isRequired
    }

    componentWillMount() {
        dispatch(getTweets(userId))
    }

    render() {
        const { tweets, actions } = this.props;

        return (
            <section className="main">
                <ul className="tweet-list">
                    {tweets.map(tweet =>
                        <Tweet key={tweet.id} tweet={tweet} {...actions} />
                    )}
                </ul>
            </section>
        )
    }
}

function mapStateToTweetList(state) {
    return {
        myUserAccount: state.authReducer.userId,
        tweets: state.tweetReducer.tweets
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