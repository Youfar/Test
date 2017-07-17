/**
 * Created by cho.oh on 西暦17/07/13.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>ホーム</h1>
                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div>
                            <ul className="nav navbar-nav nav-pills navbar-right">
                                {/*<li className="pull-right"><Link to="/signup">アカウント作成</Link></li>*/}
                                <li className="pull-right"><Link to="/login">ログイン</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="nav navbar-nav nav-pills navbar-right">
                                <li className="pull-right"><Link to="/signup">アカウント作成</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

