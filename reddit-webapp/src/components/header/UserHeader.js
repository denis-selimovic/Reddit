import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../actions";

const UserHeader = props => {

    return (
        <div className="item">
            <div className="item">
                <Link to="/profile">
                    <i className="user large icon"/>
                </Link>
                <div className="content">{props.username}</div>
            </div>
            <button className="ui primary button" onClick={() => props.signOut()}>Log out</button>
        </div>
    );
};

export default connect(null, { signOut })(UserHeader);
