/**
 * Created by cho.oh on 西暦17/07/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Main from './Main';
import { connect } from 'react-redux';
import { tokenReducer } from '../reducers/TokenReducer';

class App extends Component {
    static propTypes = {
        token: PropTypes.string,
        username: PropTypes.string
    };

    render() {
        const {token, username} = this.props;
        return (
            <div>
                {(() => {
                    if(token !== null) {
                        return (<div>
                            <Main token={token} username={username}/>
                        </div>)
                    } else {
                        return <h1>You are not logged in</h1>
                    }
                })()}
            </div>
        );
    }
}

function mapStateToApp(state) {
    return {
        token: state.tokenReducer.token,
        username: state.tokenReducer.username
    }
}

function mapDispatchToApp(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToApp,
    mapDispatchToApp
)(App);
