import * as types from '../constants/ActionTypes'

export const addTweet = text => ({ type: types.ADD_TWEET, text })
export const deleteTweet = id => ({ type: types.DELETE_TWEET, id })
export const favoriteTweet = id => ({ type: types.FAVORITE_TWEET, id })
