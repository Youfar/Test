/**
 * Created by youfar on 2017/07/17.
 */
import { createAction, createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { browserHistory } from "react-router";

const GET_TWEETS_API_URL = 'http://localhost:8080/getTweet';
export const TWEET_LIST_ACTIONS = {
    REQUEST_GET_TWEETS: 'REQUEST_GET_TWEETS',
    COMPLETE_GET_TWEETS: 'COMPLETE_GET_TWEETS',
    // FAILED_GET_TWEETS: 'FAILED_GET_TWEETS'
};

const requestGetTweets = createAction(TWEET_LIST_ACTIONS.REQUEST_GET_TWEETS);
const completeGetTweets = createAction(TWEET_LIST_ACTIONS.COMPLETE_GET_TWEETS, (tweets) => ({tweets: tweets}));

export function getTweets(userId) {
    return function(dispatch) {
        dispatch(requestGetTweets());
        // const headers = new Headers();
        // headers.append("x-auth-token", token);
        return fetch(GET_TWEETS_API_URL, {
            mode: 'cors',
            method: 'GET',
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetTweets(json));
        }).catch(function(err) {
            dispatch(completeGetTweets(err));
            // dispatch(removeToken());
        });
    };
}