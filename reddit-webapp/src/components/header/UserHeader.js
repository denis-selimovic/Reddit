import React from "react";
import {Link} from "react-router-dom";

export default props => {

    return (
        <div className="item">
            <Link to="/profile" className="item">
                <i className="user large icon"/>
            </Link>
            <div className="header">
                {props.username}
            </div>
        </div>
    );
};
