/**
 * Created by cho.oh on 西暦17/07/20.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { deleteTweet } from '../actions/TweetAction'
import classnames from 'classnames'
import {Link} from "react-router";

export default class Tweet extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        // deleteTweet: PropTypes.func.isRequired,
        // favoriteTweet: PropTypes.func.isRequired
    }

    render() {
        const { username, userId, token, dispatch, tweetContent, tweetId, favoriteTweet } = this.props

        // let element
        //     element = (
        //         <div className="view">
        //             <label> {} </label>
        //         </div>
        //     )
        // return (
        //     <li>
        //         {tweetContent} <button onClick={() => deleteTweet(tweetId)}>delete</button>
        //     </li>
        // )

        let element;
        element = (
            <Link to={"/profile/" + userId}>
                {username}
            </Link>
        )

        return (
            <li>
                {element}
            </li>
        )
    }
}