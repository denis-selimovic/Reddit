import React from "react";

const Menu = ({ options }) => {

    console.log(options);

    return (
        <div className="ui fluid selection dropdown">
            <input type="hidden" name="user" />
            <i className="dropdown icon"/>
            <div className="default text">Posts</div>
            <div className="menu">
                <div className="item" data-value="jenny">Jenny Hess</div>
                <div className="item" data-value="elliot">Elliot Fu</div>
            </div>
        </div>
    );
};

export default Menu;
