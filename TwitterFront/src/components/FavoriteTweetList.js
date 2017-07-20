/**
 * Created by cho.oh on 西暦17/07/20.
 */
import React, { Component } from 'react';
import Tweet from '../components/Tweet';

import { connect } from 'react-redux';
import { getTweets, deleteTweet, addFavoriteTweet, deleteFavoriteTweet } from '../actions/FavoriteTweetAction';
import {dispatch} from "redux";
import PropTypes from 'prop-types'
import FavoriteTweet from "./FavoriteTweet";

class FavoriteTweetList extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        favoriteTweets: PropTypes.array.isRequired,
        token: PropTypes.string,
        // onClickGetTweets: (token: string) => void
    }

    render() {
        const { dispatch, favoriteTweets, token } = this.props

        return (
            <section className="main">
                <ul className="favorite-tweet-list">
                    {favoriteTweets.map(favoriteTweet =>
                        <FavoriteTweet key={favoriteTweet.tweet.tweetId}  dispatch={dispatch} token={token}{...favoriteTweet} />
                    )}
                </ul>
            </section>
        )
    }
}

function mapStateToFavoriteTweetList(state) {
    return {
        favoriteTweets: state.tweetReducer.favoriteTweets,
        token: state.tokenReducer.token
    }
}

function mapDispatchToFavoriteTweetList(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToFavoriteTweetList,
    mapDispatchToFavoriteTweetList
)(FavoriteTweetList);