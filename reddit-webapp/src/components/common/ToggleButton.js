import React from "react";

class ToggleButton extends React.Component {
    render() {
        return (
            <button className="ui right floated primary button">{this.props.text}</button>
        );
    }
}

export default ToggleButton;
