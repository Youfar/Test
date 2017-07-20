/**
 * Created by cho.oh on 西暦17/07/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTweets, tweet } from '../actions/TweetAction'
import { getFavoriteTweets } from '../actions/FavoriteTweetAction'
import { getAllUsers } from '../actions/FollowAction'
import Home from './Home';
import TweetList from '../components/TweetList';
import FavoriteTweetList from "./FavoriteTweetList";
import UserList from "./UserList";

class Main extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        token: PropTypes.string,
        username: PropTypes.string,
        tweets: PropTypes.array,
        users: PropTypes.array,
        favoriteTweets: PropTypes.array
    }

    render() {
        let tweetContent;
        const { users, dispatch, token, username, tweets, favoriteTweets } = this.props;

        return (
            <div>
                <header>welcome {username}</header>
                {/*welcome {username}*/}
                <form onSubmit={e => {
                    e.preventDefault();
                    dispatch(tweet(tweetContent.value, token));
                    tweetContent.value = '';
                }}>
                    <div className="form-group">
                    <label>ツイート</label>
                    <input type="text" placeholder="今なにをやてる" ref={node => {
                        tweetContent = node
                    }} required aria-required="true" className="form-control"/>
                    </div>
                    <div>
                        <input type="submit" value="ツイート" className="btn btn-primary col-xs-4 col-xs-offset-4"/>
                    </div>
                </form>
                <botton onClick={e => {
                    e.preventDefault();
                    dispatch(getTweets(token));
                    dispatch(getAllUsers(token));
                }}> Here </botton>
                <botton onClick={e => {
                    e.preventDefault();
                    dispatch(getFavoriteTweets(token));
                }}> Favorite </botton>

                <TweetList token={token} tweets={tweets} dispatch={dispatch}/>
                <h1> ---------------------- </h1>
                <FavoriteTweetList token={token} favoriteTweets={favoriteTweets} dispatch={dispatch}/>
                <h1> ---------------------- </h1>
                <UserList token={token} users={users} dispatch={dispatch}/>

            </div>
        )
    }
}

function mapStateToMain(state) {
    return {
        token: state.tokenReducer.token,
        username: state.tokenReducer.username,
        tweets: state.tweetReducer.tweets,
        users: state.followReducer.users,
        favoriteTweets: state.tweetReducer.favoriteTweets
    }
}

function mapDispatchToMain(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToMain,
    mapDispatchToMain,
)(Main);