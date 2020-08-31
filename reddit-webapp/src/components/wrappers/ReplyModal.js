import React from "react";
import ReactDOM from "react-dom";
import history from "../../history";
import CreateComment from "../forms/CreateComment";

const ReplyModal = props => {

    const cancel = () => history.push("/")
    const action = () => {}

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={() => cancel()}>
            <div className="ui standard modal visible active" onClick={e => e.stopPropagation()} style={{paddingBottom: '50px'}}>
                <div className="ui item" style={{marginTop: '50px', marginBottom: '50 px'}}>
                    <CreateComment/>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
};

export default ReplyModal;
