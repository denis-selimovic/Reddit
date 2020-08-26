import React from "react";

export default () => {
    return (
        <React.Fragment>
            <div className="ui dropdown item">
                Language <i className="dropdown icon"/>
                <div className="menu">
                    <a className="item">English</a>
                    <a className="item">Russian</a>
                    <a className="item">Spanish</a>
                </div>
            </div>
        </React.Fragment>
    );
};
