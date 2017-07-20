/**
 * Created by cho.oh on 西暦17/07/18.
 */
import { createAction, createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { createApiUrl } from '../constants/constant';
import { browserHistory } from "react-router";
import {removeToken, setToken} from './TokenAction';

const TWEET_API_URL = 'http://localhost:8080/tweet';
export const POST_TWEET_ACTIONS = {
    REQUEST_POST_TWEET: 'REQUEST_POST_TWEET',
    COMPLETE_POST_TWEET: 'COMPLETE_POST_TWEET',
    FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestPostTweet = createAction(POST_TWEET_ACTIONS.REQUEST_POST_TWEET, () => ({text: "リクエスト中"}));
const completePostTweet = createAction(POST_TWEET_ACTIONS.COMPLETE_POST_TWEET, (json) => ({tweet: json}));

export function tweet(tweet, token) {
    return function(dispatch) {
        dispatch(requestPostTweet());
        const headers = new Headers();
        headers.append('x-auth-token', token);
        const body = new FormData();
        body.append('tweetContent', tweet);
        return fetch(TWEET_API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: body
        }).then(function(response) {
            if (response.status === 401) {
                throw new Error();
            }
            return response.json();
        }).then(function(json) {
            dispatch(completePostTweet(json));
        }).catch(err => {
            dispatch(completePostTweet(err));
            // dispatch(removeToken());
        });
    }
}

// const DELETE_TWEET_API_URL = 'http://localhost:4000/api/deleteTweet';
const DELETE_TWEET_API_URL = 'http://localhost:8080/deleteTweet';
export const TWEET_ACTIONS = {
    REQUEST_DELETE_TWEET: 'REQUEST_DELETE_TWEET',
    COMPLETE_DELETE_TWEET: 'COMPLETE_DELETE_TWEET',
    // FAILED_DELETE_TWEET: 'FAILED_DELETE_TWEET'
};

const requestDeleteTweet = createAction(TWEET_ACTIONS.REQUEST_DELETE_TWEET);
const completeDeleteTweet = createAction(TWEET_ACTIONS.COMPLETE_DELETE_TWEET, (tweetId) => ({tweetId: tweetId}));
// const failedDeleteTweet: ActionCreator = createAction(TWEET_ACTIONS.FAILED_DELETE_TWEET, (errMsg) => ({errMsg: errMsg}));

export function deleteTweet(token, tweetId) {
    return function(dispatch) {
        dispatch(requestDeleteTweet());
        const headers = new Headers();
        headers.append('x-auth-token', token);
        const body = new FormData();
        body.append("tweetId", tweetId.toString());
        return fetch(DELETE_TWEET_API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: body
        }).then(function(response) {
            if (!response.ok) {
                throw new Error();
            }
            console.log("point1");
            dispatch(completeDeleteTweet(tweetId));
        }).catch(function(err) {
            console.log("point2");
            dispatch(completeDeleteTweet(err));
            // dispatch(removeToken());
            // dispatch(failedDeleteTweet(err.message));
        });
    }
}

const GET_TWEETS_API_URL = 'http://localhost:8080/getTweet';
export const TWEET_LIST_ACTIONS = {
    REQUEST_GET_TWEETS: 'REQUEST_GET_TWEETS',
    COMPLETE_GET_TWEETS: 'COMPLETE_GET_TWEETS',
    // FAILED_GET_TWEETS: 'FAILED_GET_TWEETS'
};

const requestGetTweets = createAction(TWEET_LIST_ACTIONS.REQUEST_GET_TWEETS);
const completeGetTweets = createAction(TWEET_LIST_ACTIONS.COMPLETE_GET_TWEETS, (tweets) => ({tweets: tweets}));
// const failedGetTweets: ActionCreator = createAction(TWEET_LIST_ACTIONS.FAILED_GET_TWEETS, (errMsg) => ({errMsg: errMsg}));

export function getTweets(token) {
    return function(dispatch) {
        dispatch(requestGetTweets());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        return fetch(GET_TWEETS_API_URL, {
            mode: 'cors',
            method: 'GET',
            headers: headers,
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetTweets(json));
        }).catch(function(err) {
            dispatch(completeGetTweets(err));
 //           dispatch(removeToken());
        });
    };
}