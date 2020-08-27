import React from "react";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { getUser } from "../../user";

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
                    {getUser() && getUser().token ? <UserHeader username="Denis"/> : <GuestHeader/>}
                </div>
            </div>
        );
    }
}

export default Header;
