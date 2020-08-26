import React from "react";
import { connect } from 'react-redux';
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";

class Header extends React.Component {

    render() {
        return (
            <div className="ui secondary  menu">
                <div className="item">
                    <i className="terminal icon"/>
                </div>
                <div className="item header">
                    <h3>Reddit Clone</h3>
                </div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                                <i className="search link icon"/>
                        </div>
                    </div>
                    {this.props.isSignedIn ? <UserHeader/> : <GuestHeader/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps)(Header);
