import { ADD_TWEET, DELETE_TWEET, FAVORITE_TWEET } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    favorite: false,
    id: 0
  }
]

export default function tweets(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET:
      return [
        {
          id: state.reduce((maxId, tweet) => Math.max(tweet.id, maxId), -1) + 1,
          favorite: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TWEET:
      return state.filter(tweet =>
        tweet.id !== action.id
      )

    case FAVORITE_TWEET:
      return state.map(tweet =>
        tweet.id === action.id ?
          { ...tweet, favorite: !tweet.favorite } :
          tweet
      )

    default:
      return state
  }
}
