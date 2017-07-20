/**
 * Created by cho.oh on 西暦17/07/20.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addFollowing} from "../actions/FollowAction";

class Profile extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        token: PropTypes.string,
        // targetUserId: PropTypes.number.isRequired,
        // userId: PropTypes.number.isRequired,
        // deleteTweet: PropTypes.func.isRequired,
        // favoriteTweet: PropTypes.func.isRequired
    }
    render() {
        const { dispatch, token } = this.props
        // const { targetUserId } = this.props.params.userId
        return (
            <div>
                {/*<h1>welcome {userId}</h1>*/}
                <h1>welcome {this.props.params.userId}</h1>
                {/*<h1>welcome {targetUserId}</h1>*/}
                <button onClick={() => dispatch(addFollowing(token, this.props.params.userId))}>Follow</button>
                {/*<button>Follow</button>*/}
            </div>
        )
    }
}

function mapStateToProfile(state) {
    return {
        // followFlg: state.followReducer.followFlg,
        token: state.tokenReducer.token
    }
}

function mapDispatchToProfile(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProfile,
    mapDispatchToProfile
)(Profile);