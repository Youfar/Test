/**
 * Created by cho.oh on 西暦17/07/13.
 */
import { REQUEST_LOGIN, COMPLETE_LOGIN, FAILED_LOGIN, AFTER_LOGIN} from '../constants/ActionTypes'
import { handleActions } from 'redux-actions';


// const initialState = [
//     {
//         loggedIn: false
//         shouldRedirect: false,
//         errorMessage: null
//     }
// ]
//
// export default function auths(state = initialState, action) {
//     switch (action.type) {
//         case COMPLETE_LOGIN:
//             return Object.assign({}, state, {loggedIn: true, shouldRedirect: true})
//         case
//     }
// }

export const authReducer = handleActions({
    REQUEST_SIGN_UP: (state, action) => Object.assign({}, state, {}),
    COMPLETE_SIGN_UP: {
        next: (state, action) => Object.assign({}, state, {
            signUpFlg: true
        }),
        throw: (state, action) => Object.assign({}, state, {
            signUpMsg: action.payload.message
        })
    },
    REQUEST_LOGIN: (state, action) => Object.assign({}, state, {}),
    COMPLETE_LOGIN: {
        next: (state, action) => Object.assign({}, state, {
            loginFlg: true
        }),
        throw: (state, action) => Object.assign({}, state, {
            loginMsg: action.payload.message
        }),
    },


    }, {userId: 0,  signUpMsg: "", loginMsg: "", loginFlg: false, signUpFlg: false}
);