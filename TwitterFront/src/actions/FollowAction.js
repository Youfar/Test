/**
 * Created by cho.oh on 西暦17/07/20.
 */
import { createAction, createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { createApiUrl } from '../constants/constant';
import { browserHistory } from "react-router";
import {removeToken, setToken} from './TokenAction';

const GET_ALL_USERS_API_URL = 'http://localhost:8080/getAllUsers';
export const ALL_USERS_ACTIONS = {
    REQUEST_GET_ALL_USERS: 'REQUEST_GET_ALL_USERS',
    COMPLETE_GET_ALL_USERS: 'COMPLETE_GET_ALL_USERS',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestGetAllUsers = createAction(ALL_USERS_ACTIONS.REQUEST_GET_ALL_USERS);
const completeGetAllUsers = createAction(ALL_USERS_ACTIONS.COMPLETE_GET_ALL_USERS, (users) => ({users: users}));

export function getAllUsers(token) {
    return function(dispatch) {
        dispatch(requestGetAllUsers());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        return fetch(GET_ALL_USERS_API_URL, {
            mode: 'cors',
            method: 'GET',
            headers: headers,
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetAllUsers(json));
        }).catch(function(err) {
            dispatch(completeGetAllUsers(err));
        });
    };
}

const ADD_FOLLOW_API_URL = 'http://localhost:8080/addFollowing';
export const ADD_FOLLOW_ACTIONS = {
    REQUEST_ADD_FOLLOW: 'REQUEST_ADD_FOLLOW',
    COMPLETE_ADD_FOLLOW: 'COMPLETE_ADD_FOLLOW',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestAddFollow = createAction(ADD_FOLLOW_ACTIONS.REQUEST_ADD_FOLLOW);
const completeAddFollow = createAction(ADD_FOLLOW_ACTIONS.COMPLETE_ADD_FOLLOW, (targetUserId) => ({targetUserId: targetUserId}));

export function addFollowing(token, targetUserId) {
    return function(dispatch) {
        dispatch(requestAddFollow());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        const body = new FormData();
        body.append('targetUserId',targetUserId);
        return fetch(ADD_FOLLOW_API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: body
        }).then(function(response) {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeAddFollow(targetUserId));
        }).catch(function(err) {
            dispatch(completeAddFollow(err));
        });
    };
}