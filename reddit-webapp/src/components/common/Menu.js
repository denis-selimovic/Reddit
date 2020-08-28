import React from "react";

const Menu = ({ options }) => {


    const renderOptions = () => {
        return Object.keys(options).map(key => {
            return (
                <div key={key} className="item" data-value={key} onClick={e => options[key].callback()}>{options[key].value}</div>
            );
        });
    };

    return (
        <div className="ui simple fluid selection dropdown" style={{zIndex: '10'}}>
            <input type="hidden" name="user" />
            <i className="dropdown icon"/>
            <div className="menu">{renderOptions()}</div>
        </div>
    );
};

export default Menu;
