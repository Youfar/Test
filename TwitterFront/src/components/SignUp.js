/**
 * Created by youfar on 2017/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { signUp } from '../actions/AuthAction';

class SignUp extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        serverMsg: PropTypes.string,
        signUpFlg: PropTypes.bool
    };

    render() {
        let username, email, password, confirmedPassword;
        const { dispatch, serverMsg, signUpFlg } = this.props;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    {/*if (password.value !== confirmedPassword.value) {*/}
                        {/*password.value = '';*/}
                        {/*confirmedPassword.value = '';*/}
                        {/*dispatch(passwordNotMatch());*/}
                        {/*return;*/}
                    {/*}*/}
                    dispatch(signUp(username.value, email.value, password.value));
                    username.value = '';
                    email.value = '';
                    password.value = '';
                    {/*confirmedPassword.value = '';*/}
                }}>
                    <div className="form-group">
                        <label>ユーザ名</label>
                        <input type="text" placeholder="ユーザー名" ref={node => {
                            username = node
                        }} required aria-required="true" className="form-control"/>
                        <label>登録メールアドレス</label>
                        <input type="text" placeholder="登録メールアドレス" ref={node => {
                            email = node
                        }} required aria-required="true" className="form-control"/>
                        <label>パスワード(8文字以上)</label>
                        <input type="password" placeholder="パスワード(8文字以上)" minLength="8" ref={node => {
                            password = node
                        }} required aria-required="true" className="form-control"/>
                        {/*<label>パスワード確認</label>*/}
                        {/*<input type="password" placeholder="パスワード確認" minLength="8" ref={node => {*/}
                            {/*confirmedPassword = node*/}
                        {/*}} required aria-required="true" className="form-control"/>*/}
                    </div>
                    <div>
                        <input type="submit" value="登録" className="btn btn-primary col-xs-4 col-xs-offset-4"/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToSignUp(state) {
    return {
        serverMsg: state.authReducer.signUpMsg,
        signUpFlg: state.authReducer.signUpFlg
    }
}

function mapDispatchToSignUp(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapStateToSignUp,
    mapDispatchToSignUp
)(SignUp);