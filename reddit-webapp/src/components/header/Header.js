import React from "react";
import { Link } from "react-router-dom";

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
                    <div className="ui item">
                        <Link to="/login" className="ui button">Log in</Link>
                    </div>
                    <div className="ui item">
                        <Link to="/signup"  className="ui primary button">Sign up</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;
