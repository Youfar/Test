/**
 * Created by cho.oh on 西暦17/07/20.
 */
import React, { Component } from 'react';
import Tweet from '../components/Tweet';

import { connect } from 'react-redux';
// import { getTweets, deleteTweet, addFavoriteTweet, deleteFavoriteTweet } from '../actions/TweetAction';
import {dispatch} from "redux";
import PropTypes from 'prop-types'
import User from "./User";

class UserList extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        // onClickGetTweets: (token: string) => void
    }

    render() {
        const { dispatch, users, token } = this.props

        return (
            <section className="main">
                <ul className="user-list">
                    {users.map(user =>
                        <User key={user.userId} dispatch={dispatch} userId={user.userId} {...user} />
                    )}
                </ul>
            </section>
        )
    }
}

function mapStateToUserList(state) {
    return {
        users: state.followReducer.users
    }
}

function mapDispatchToUserList(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToUserList,
    mapDispatchToUserList
)(UserList);