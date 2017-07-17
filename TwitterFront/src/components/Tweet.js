/**
 * Created by youfar on 2017/07/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tweet extends Component {
    static propTypes = {
        tweet: PropTypes.object.isRequired,
        // deleteTweet: PropTypes.func.isRequired,
        // favoriteTweet: PropTypes.func.isRequired
    }

    render() {
        const { tweet } = this.props;

        let element;
        element = (
            <div className="view">
                <label>
                    {tweet.text}
                </label>
            </div>
        )

        return (
            <li>
                {element}
            </li>
        )
    }
}