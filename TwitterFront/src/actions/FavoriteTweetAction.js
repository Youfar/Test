/**
 * Created by cho.oh on 西暦17/07/20.
 */
import { createAction, createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { createApiUrl } from '../constants/constant';
import { browserHistory } from "react-router";
import {removeToken, setToken} from './TokenAction';

const GET_FAVORITE_TWEETS_API_URL = 'http://localhost:8080/getFavoriteTweet';
export const FAVORITE_TWEET_LIST_ACTIONS = {
    REQUEST_GET_FAVORITE_TWEETS: 'REQUEST_GET_FAVORITE_TWEETS',
    COMPLETE_GET_FAVORITE_TWEETS: 'COMPLETE_GET_FAVORITE_TWEETS',
    // FAILED_GET_TWEETS: 'FAILED_GET_TWEETS'
};

const requestGetFavoriteTweets = createAction(FAVORITE_TWEET_LIST_ACTIONS.REQUEST_GET_FAVORITE_TWEETS);
const completeGetFavoriteTweets = createAction(FAVORITE_TWEET_LIST_ACTIONS.COMPLETE_GET_FAVORITE_TWEETS, (json) => ({favoriteTweets: json}));
// const failedGetTweets: ActionCreator = createAction(TWEET_LIST_ACTIONS.FAILED_GET_TWEETS, (errMsg) => ({errMsg: errMsg}));

export function getFavoriteTweets(token) {
    return function(dispatch) {
        dispatch(requestGetFavoriteTweets());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        return fetch(GET_FAVORITE_TWEETS_API_URL, {
            mode: 'cors',
            method: 'GET',
            headers: headers,
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetFavoriteTweets(json));
        }).catch(function(err) {
            dispatch(completeGetFavoriteTweets(err));
            //           dispatch(removeToken());
        });
    };
}