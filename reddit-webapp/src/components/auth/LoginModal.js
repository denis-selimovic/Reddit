import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../../actions/index'
import Login from "../forms/Login";

const LoginModal = props => {

    const onSubmit = formValues => props.signIn(formValues);

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">LOGIN</div>
                        <div className="middle aligned row">
                            <div className="column">
                                <div className="ui icon header">
                                    <i className="user large icon"/>
                                </div>
                            </div>
                            <div className="column">
                                <div className="item">
                                    <div className="header">
                                        <h4>By continuing, you agree to our User agreement and Privacy policy.</h4>
                                    </div>
                                </div>
                                <div className="ui horizontal divider"/>
                                <div className="ui horizontal divider"/>
                                <div className="item">
                                    <Login onSubmit={onSubmit}/>
                                </div>
                                <div className="ui horizontal divider"/>
                                <div className="ui horizontal divider"/>
                                <div className="item">
                                    <div className="content">
                                        Forgot your <Link to="/forgot">password</Link>?
                                    </div>
                                </div>
                                <div className="ui horizontal divider"/>
                                <div className="item">
                                    <div className="content">
                                        New to Reddit Clone? <Link to="/signup">Sign up here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default connect(null, { signIn })(LoginModal);
