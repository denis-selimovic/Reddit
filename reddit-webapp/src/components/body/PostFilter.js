import React from "react";

class PostFilter extends React.Component {
    render() {
        return (
            <div className="ui two item menu">
                <div className="item">
                    <button className="ui labeled icon button">
                        <i className="hotjar large icon"></i>
                        Hot
                    </button>
                </div>
                <div className="item">
                    <button className="ui labeled icon button">
                        <i className="chart line large icon"></i>
                        Top
                    </button>
                </div>
            </div>
        );
    }
}

export default PostFilter;
