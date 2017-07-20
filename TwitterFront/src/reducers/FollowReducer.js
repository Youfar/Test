/**
 * Created by cho.oh on 西暦17/07/20.
 */
import { handleActions } from 'redux-actions';

export const followReducer = handleActions(
    {
        REQUEST_GET_ALL_USERS: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_ALL_USERS: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                users: action.payload.users
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },

        REQUEST_ADD_FOLLOW: (state, action) => Object.assign({}, state, {

        }),
        COMPLETE_ADD_FOLLOW: {
            next: (state, action) => Object.assign({}, state, {
                followFlg: true
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },
    }, {text: "", users: [], followFlg: false}
)