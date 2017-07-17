/**
 * Created by cho.oh on 西暦17/07/13.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../actions/AuthAction';


class Login extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        serverMsg: PropTypes.string,
        loginFlg: PropTypes.bool
    };

    render() {
        let email, password;

        const { dispatch, serverMsg, loginFlg } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div>
                        <form onSubmit={e => {
                            e.preventDefault();
                            dispatch(login(email.value, password.value));

                        }}>
                            <div className="form-group">
                                <label>ユーザアカウント名</label>
                                <input type="text" ref={node => {
                                    email = node;
                                }} required aria-required="true" className="form-control"/>
                                <label>パスワード</label>
                                <input type="password" ref={node => {
                                    password = node;
                                }} required aria-required="true" className="form-control"/>
                            </div>
                            <div>
                                <input type="submit" value="ログイン" className="btn btn-primary col-xs-4 col-xs-offset-4"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToLogin(state) {
    return {
        serverMsg: state.authReducer.loginMsg,
        loginFlg: state.authReducer.loginFlg
    }
}

function mapDispatchToLogin(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToLogin,
    mapDispatchToLogin,
)(Login);