/**
 * Created by youfar on 2017/07/17.
 */
import { handleActions } from 'redux-actions';

export const tweetReducer = handleActions({
    REQUEST_GET_TWEETS: (state, action) => Object.assign({}, state, {}),
    COMPLETE_GET_TWEETS: {
        next: (state, action) => Object.assign({}, state, {
            text: action.payload.text,
            tweets: action.payload.tweets
        }),
        throw: (state, action) => Object.assign({}, state, {
            text: action.payload.message
        })
    },
    }, {text: "", tweetCompleteFlg: false, tweetInputText: "", tweets: [], favoriteTweets: []}
);