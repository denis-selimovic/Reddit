import React from "react";
import { connect } from "react-redux";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { getUser } from "../../user";
import { fetchPosts, fetchUserPosts } from "../../actions";
import Menu from "../common/Menu";

class Header extends React.Component {

    options = {
        all: {
            value: 'All',
            callback: this.props.fetchPosts
        },
        myPosts: {
            value: 'My posts',
            callback: this.props.fetchUserPosts
        }
    }

    render() {
        const user = getUser();
        const render = (user && user.token) || this.props.isSignedIn;
        return (
            <div className="ui secondary  menu">
                <div className="item">
                    <i className="terminal icon"/>
                </div>
                <div className="item header">
                    <h3>Reddit Clone</h3>
                </div>
                <div className="item" style={{width: '200px'}}>
                    {getUser() ? <Menu options={this.options}/> : null}
                </div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                                <i className="search link icon"/>
                        </div>
                    </div>
                    {render ? <UserHeader username={user.username}/> : <GuestHeader/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { fetchPosts, fetchUserPosts })(Header);
